import type { NextPage } from "next";
import { useState } from "react";
import {
  Button,
  Caregiver,
  Header,
  Input,
  MainTitle,
  Select,
} from "../../components";
import { FormWrapper } from "../../styles/Pages/CaregiversList";
import { MainContainer } from "../../styles/Pages/Commons";

const Caregivers: NextPage = () => {
  const [weekDay, setWeekDay] = useState("");
  const [time, setTime] = useState("");

  const caregiver = {
    id: 1,
    firstName: "Maria",
    lastName: "Silva",
    city: "Ouro Branco",
    state: "MG",
    avatar:
      "http://core360.com.br/shop/skin/adminhtml/default/default/lib/jlukic_semanticui/examples/assets/images/avatar/nan.jpg",
    whatsapp: "3187226636",
    bio: "Cuidadora com mais de oito anos de experiência. Atuou em casas de família e hospitais. Possui curso profissionalizante na área.",
    cost: 20.0,
    schedules: [
      {
        weekDay: 1,
        fromTime: 8,
        toTime: 23,
      },
      {
        weekDay: 2,
        fromTime: 8,
        toTime: 18,
      },
      {
        weekDay: 3,
        fromTime: 8,
        toTime: 23,
      },
      {
        weekDay: 4,
        fromTime: 8,
        toTime: 18,
      },
      {
        weekDay: 5,
        fromTime: 8,
        toTime: 23,
      },
      {
        weekDay: 5,
        fromTime: 8,
        toTime: 18,
      },
      {
        weekDay: 6,
        fromTime: 8,
        toTime: 23,
      },
      {
        weekDay: 6,
        fromTime: 8,
        toTime: 18,
      },
      {
        weekDay: 6,
        fromTime: 8,
        toTime: 23,
      },
      {
        weekDay: 6,
        fromTime: 8,
        toTime: 18,
      },
      {
        weekDay: 6,
        fromTime: 8,
        toTime: 23,
      },
      {
        weekDay: 6,
        fromTime: 8,
        toTime: 18,
      },
    ],
    patients: [0, 1, 2, 3, 4, 5],
  };

  return (
    <MainContainer>
      <Header />
      <MainTitle title="Estes são os cuidadores disponíveis.">
        <FormWrapper>
          <Select
            name="weekDay"
            label="Dia da semana"
            value={weekDay}
            onChange={(e) => {
              setWeekDay(e.target.value);
            }}
            options={[
              { value: "0", label: "Domingo" },
              { value: "1", label: "Segunda-Feira" },
              { value: "2", label: "Terça-Feira" },
              { value: "3", label: "Quarta-Feira" },
              { value: "4", label: "Quinta-Feira" },
              { value: "5", label: "Sexta-Feira" },
              { value: "6", label: "Sábado" },
            ]}
          />
          <Input
            type="time"
            name="time"
            label="Horário"
            value={time}
            onChange={(e) => {
              setTime(e.target.value);
            }}
          />
          <Button
            label="Buscar"
            color="secondary"
            icon="arrow-right"
            type="submit"
          />
        </FormWrapper>
      </MainTitle>

      <Caregiver caregiver={caregiver} />
      <Caregiver caregiver={caregiver} />
      <Caregiver caregiver={caregiver} />
      <Caregiver caregiver={caregiver} />
      <Caregiver caregiver={caregiver} />
    </MainContainer>
  );
};

export default Caregivers;
