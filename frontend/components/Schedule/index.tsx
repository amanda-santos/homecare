import React from "react";
import { ScheduleWrapper } from "./styles";

type Props = {
  weekDay: string;
  fromTime: number;
  toTime: number;
};

export const Schedule = ({ weekDay, fromTime, toTime }: Props) => {
  return (
    <ScheduleWrapper>
      <span>
        <p>Dia</p>
        <h6>{weekDay}</h6>
      </span>
      <span>
        <p>Horário</p>
        <h6>
          {fromTime}h - {toTime}h
        </h6>
      </span>
    </ScheduleWrapper>
  );
};
