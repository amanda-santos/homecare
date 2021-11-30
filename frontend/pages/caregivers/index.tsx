import { FormEvent, useState } from "react";
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

type Props = {
  data: CaregiverType[];
};

export const getServerSideProps = async () => {
  const response = await api.get("caregivers");

  return {
    props: {
      data: response.data,
    },
  };
};

const Caregivers = ({ data }: Props) => {
  const [caregivers, setCaregivers] = useState(data);
  const [weekDay, setWeekDay] = useState("");
  const [time, setTime] = useState("");

  const searchCaregivers = async (e: FormEvent) => {
    e.preventDefault();
    const response = await api.get("caregivers", {
      params: {
        week_day: weekDay,
        time,
      },
    });

    setCaregivers(response.data);
  };

  return (
    <MainContainer>
      <Header />
      <MainTitle title="Estes são os cuidadores disponíveis.">
        <FormWrapper onSubmit={searchCaregivers}>
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
      {caregivers?.map((caregiver: CaregiverType) => (
        <Caregiver key={caregiver.id} caregiver={caregiver} />
      ))}
    </MainContainer>
  );
};

export default Caregivers;
