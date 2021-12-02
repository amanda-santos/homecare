import { Request, Response } from "express";

import db from "../database/connection";
import {
  convertHourToMinutes,
  convertMinutesToHoursMinutes,
} from "../utils/time";

interface ScheduleItem {
  week_day: number;
  from_time: string;
  to_time: string;
}
const getPatients = async (id: number) => {
  const patientsResult = await db("users")
    .select("patient_id")
    .from("caregiver_patient")
    .where("caregiver_id", id);
  return patientsResult.map((res) => res.patient_id);
};

const getSchedule = async (id: number) => {
  const scheduleResult = await db("users")
    .select("week_day", "from_time", "to_time")
    .from("caregiver_schedule")
    .where("caregiver_id", id);
  return scheduleResult.map((scheduleObject) => {
    return {
      weekDay: scheduleObject.week_day,
      fromTime: convertMinutesToHoursMinutes(scheduleObject.from_time),
      toTime: convertMinutesToHoursMinutes(scheduleObject.to_time),
    };
  });
};

export default class CaregiversController {
  async index(request: Request, response: Response) {
    const filters = request.query;
    const week_day = filters?.week_day as string;
    const time = filters?.time as string;

    let result = [];
    let caregivers = [];

    if (!filters.week_day && !filters.time) {
      result = await db("caregivers")
        .join("users", "caregivers.user_id", "=", "users.id")
        .select(["caregivers.*", "users.*"]);
    } else if (!filters.week_day || !filters.time) {
      return response.status(400).json({
        error: "Missing filters to search for caregivers.",
      });
    } else {
      const timeInMinutes = convertHourToMinutes(time);

      result = await db("users")
        .innerJoin("caregivers", "users.id", "caregivers.user_id")
        .whereExists(function () {
          this.select("*")
            .from("caregiver_patient")
            .whereIn("patient_id", [0, 1, 2, 3, 4, 5])
            .where("caregiver_id", db.ref("caregivers.user_id"));
        })
        .whereExists(function () {
          this.select("*")
            .from("caregiver_schedule")
            .where("caregiver_schedule.week_day", Number(week_day))
            .where("caregiver_schedule.from_time", "<=", timeInMinutes)
            .where("caregiver_schedule.to_time", ">", timeInMinutes)
            .where("caregiver_id", db.ref("caregivers.user_id"));
        })
        .select("caregivers.id as caregiverId", "users.*", "caregivers.cost");
    }

    caregivers = await Promise.all(
      result.map(async (caregiver) => {
        const patients = await getPatients(caregiver.id);
        const schedule = await getSchedule(caregiver.id);

        return {
          ...caregiver,
          patients,
          schedule,
        };
      })
    );

    return response.send(caregivers);
  }

  async indexPatients(request: Request, response: Response) {
    const id = request.params.id;
    return response.send(await getPatients(parseInt(id)));
  }

  async indexSchedule(request: Request, response: Response) {
    const id = request.params.id;
    return response.send(await getSchedule(parseInt(id)));
  }

  async create(request: Request, response: Response) {
    const {
      firstName,
      lastName,
      city,
      state,
      avatar,
      whatsapp,
      bio,
      cost,
      schedule,
      patients,
    } = request.body;

    const trx = await db.transaction();

    try {
      const insertedUsersIds = await trx("users").insert({
        firstName,
        lastName,
        city,
        state,
        avatar,
        whatsapp,
        bio,
      });

      const user_id = insertedUsersIds[0];
      const insertedCaregiversIds = await trx("caregivers").insert({
        cost,
        user_id,
      });
      const caregiver_id = insertedCaregiversIds[0];

      const caregiverSchedule = schedule.map((scheduleItem: ScheduleItem) => {
        return {
          caregiver_id,
          week_day: scheduleItem.week_day,
          from_time: convertHourToMinutes(scheduleItem.from_time),
          to_time: convertHourToMinutes(scheduleItem.to_time),
        };
      });
      await trx("caregiver_schedule").insert(caregiverSchedule);

      const caregiverPatient = patients.map((patient_id: number) => {
        return {
          caregiver_id,
          patient_id,
        };
      });
      await trx("caregiver_patient").insert(caregiverPatient);
      await trx.commit();

      return response.status(201).send();
    } catch (err) {
      await trx.rollback();

      return response.status(400).json({
        error: `Unexpected error while adding new caregiver: ${err}`,
      });
    }
  }
}
