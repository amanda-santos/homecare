/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Button } from "..";
import { Patient } from "../Patient";
import { Schedule } from "../Schedule";
import {
  Bio,
  CaregiverWrapper,
  Header,
  HeaderText,
  Footer,
  PatientsWrapper,
  SchedulesWrapper,
  Cost,
} from "./styles";
import {
  Caregiver as CaregiverType,
  PatientEmoji,
  Schedule as ScheduleType,
  WeekDay,
} from "./types";
import { PatientTitle, PatientType } from "./types";

type Props = {
  caregiver: CaregiverType;
};

export const Caregiver = ({ caregiver }: Props) => {
  const {
    id,
    firstName,
    lastName,
    avatar,
    city,
    state,
    bio,
    cost,
    whatsapp,
    patients,
    schedules,
  } = caregiver;
  console.log(PatientType[2], PatientTitle[4]);
  return (
    <>
      <CaregiverWrapper>
        <Header>
          <img src={avatar} alt={`${firstName} ${lastName}`} />
          <HeaderText>
            <h4>
              {firstName} {lastName}
            </h4>
            <h5>
              {city}, {state}
            </h5>
          </HeaderText>
        </Header>

        <Bio>{bio}</Bio>

        <PatientsWrapper>
          {patients.map((patient: number) => (
            <Patient
              key={patient}
              title={PatientTitle[patient]}
              emoji={PatientEmoji[patient]}
            />
          ))}
        </PatientsWrapper>

        <SchedulesWrapper>
          {schedules.map((schedule: ScheduleType, index: number) => (
            <Schedule
              key={index}
              weekDay={WeekDay[schedule.weekDay]}
              fromTime={schedule.fromTime}
              toTime={schedule.toTime}
            />
          ))}
        </SchedulesWrapper>
      </CaregiverWrapper>
      <Footer>
        <Cost>
          <span>Preço/hora</span>{" "}
          <h4>
            {cost.toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}
          </h4>
        </Cost>
        <Button
          label="Entrar em contato"
          color="green"
          icon="whatsapp"
        ></Button>
      </Footer>
    </>
  );
};
