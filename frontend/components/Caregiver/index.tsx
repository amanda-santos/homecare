/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Button } from "..";
import api from "../../services/api";
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
  PatientShortTitle,
  Schedule as ScheduleType,
  WeekDay,
} from "../../commons/types";

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
    schedule,
  } = caregiver;

  const handleCreateConnection = () => {
    api.post("connections", {
      user_id: id,
    });
  };

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
          {patients?.map((patient: number) => (
            <Patient
              key={patient}
              title={PatientShortTitle[patient]}
              emoji={PatientEmoji[patient]}
            />
          ))}
        </PatientsWrapper>

        <SchedulesWrapper>
          {schedule?.map((schedule: ScheduleType, index: number) => (
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
            {cost?.toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}
          </h4>
        </Cost>
        <a
          href={`https://wa.me/55${whatsapp}?text=Olá!%20Tenho%20interesse%20nos%20seus%20serviços.%20Podemos%20conversar?`}
          target="_blank"
          rel="noreferrer"
          onClick={handleCreateConnection}
        >
          <Button label="Entrar em contato" color="green" icon="whatsapp" />
        </a>
      </Footer>
    </>
  );
};
