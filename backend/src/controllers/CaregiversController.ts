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

export default class CaregiversController {
  async index(request: Request, response: Response) {
    const filters = request.query;

    const patientsString = (filters.patients as string)
      ?.replace(/\[|\]/g, "")
      .split(",");
    const patients = patientsString.map(Number);
    const week_day = filters.week_day as string;
    const time = filters.time as string;

    if (!filters.week_day && !filters.patients && !filters.time) {
      const caregivers = await db("caregivers")
        .join("users", "caregivers.user_id", "=", "users.id")
        .select(["caregivers.*", "users.*"]);

      return response.send(caregivers);
    } else if (!filters.week_day || !filters.patients || !filters.time) {
      return response.status(400).json({
        error: "Missing filters to search for caregivers.",
      });
    }

    const timeInMinutes = convertHourToMinutes(time);

    const result = await db("users")
      .innerJoin("caregivers", "users.id", "caregivers.user_id")
      .whereExists(function () {
        this.select("*")
          .from("caregiver_patient")
          .whereIn("patient_id", patients)
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
      .select("caregivers.id as caregiverId", "users.*");

    return response.send(result);
  }

  async indexPatients(request: Request, response: Response) {
    const id = request.params.id;

    const result = await db("users")
      .select("patient_id")
      .from("caregiver_patient")
      .where("caregiver_id", parseInt(id));

    const patients = result.map((res) => res.patient_id);

    return response.send(patients);
  }

  async indexSchedule(request: Request, response: Response) {
    const id = request.params.id;

    const schedule = await db("users")
      .select("week_day", "from_time", "to_time")
      .from("caregiver_schedule")
      .where("caregiver_id", parseInt(id));

    const formattedSchedule = schedule.map((scheduleObject) => {
      return {
        ...scheduleObject,
        from_time: convertMinutesToHoursMinutes(scheduleObject.from_time),
        to_time: convertMinutesToHoursMinutes(scheduleObject.to_time),
      };
    });

    return response.send(formattedSchedule);
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
