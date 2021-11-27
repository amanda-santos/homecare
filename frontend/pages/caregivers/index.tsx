import type { InferGetServerSidePropsType } from "next";
import { useState } from "react";
import {
  Button,
  Caregiver,
  Header,
  Input,
  MainTitle,
  Select,
} from "../../components";
import { Caregiver as CaregiverType } from "../../components/Caregiver/types";
import api from "../../services/api";
import { FormWrapper } from "../../styles/Pages/CaregiversList";
import { MainContainer } from "../../styles/Pages/Commons";

export const getServerSideProps = async () => {
  // const getPatients = async (id: CaregiverType["id"]) => {
  //   const response = await api.get(`caregivers/${id}/patients`);
  //   return response.data;
  // };

  // const getSchedule = async (id: CaregiverType["id"]) => {
  //   const response = await api.get(`caregivers/${id}/schedule`);
  //   return response.data;
  // };

  const response = await api.get("caregivers", {
    // params: {
    //   subject,
    //   week_day,
    //   time,
    // }
  });

  return {
    props: {
      data: response.data,
    },
  };
};

const Caregivers = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const [caregivers, setCaregivers] = useState(data);
  const [weekDay, setWeekDay] = useState("");
  const [time, setTime] = useState("");
  console.log(caregivers);

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
            labelColor="white"
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
            labelColor="white"
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
      {/* {caregivers.map((caregiver: CaregiverType) => (
        <Caregiver key={caregiver.id} caregiver={caregiver} />
      ))} */}
    </MainContainer>
  );
};

export default Caregivers;
