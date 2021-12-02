import React, { FormEvent, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import { getPatients } from "../../commons/types";

import { Button, Checkbox, Input, Select, TextArea } from "..";
import {
  AddNewTimeButton,
  CaregiverFormWrapper,
  CheckboxTitle,
  Footer,
  FieldsWrapper,
  Title,
  Warning,
} from "./styles";
import api from "../../services/api";

type Props = {};

export const CaregiverForm = ({}: Props) => {
  const router = useRouter();

  const patientsType = getPatients();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [avatar, setAvatar] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [bio, setBio] = useState("");
  const [cost, setCost] = useState("");
  const [patients, setPatients] = useState<Number[]>([]);
  const [scheduleItems, setScheduleItems] = useState([
    {
      week_day: 0,
      from_time: "",
      to_time: "",
    },
  ]);

  const addNewScheduleItem = () => {
    setScheduleItems([
      ...scheduleItems,
      {
        week_day: 0,
        from_time: "",
        to_time: "",
      },
    ]);
  };

  // setScheduleItemValue(0, 'week_day', '2')
  // returns the array of scheduleItems + the fields on the altered position
  const setScheduleItemValue = (
    position: number,
    field: string,
    value: string
  ) => {
    const updatedScheduleItems = scheduleItems.map((scheduleItem, index) => {
      if (index === position) {
        return { ...scheduleItem, [field]: value };
      }

      return scheduleItem;
    });
    setScheduleItems(updatedScheduleItems);
  };

  const handleCreateCaregiver = (e: FormEvent) => {
    e.preventDefault();

    api
      .post("caregivers", {
        firstName,
        lastName,
        city,
        state,
        avatar,
        whatsapp,
        bio,
        patients,
        cost: Number(cost),
        schedule: scheduleItems,
      })
      .then(() => {
        router.push("/caregivers/created-successfully");
      })
      .catch(() => {
        alert("Erro ao cadastrar.");
      });
  };

  return (
    <form onSubmit={handleCreateCaregiver}>
      <CaregiverFormWrapper>
        <Title>Seus dados</Title>
        <hr />
        <FieldsWrapper $columns={2} style={{ marginTop: "3.2rem" }}>
          <Input
            name="firstName"
            label="Nome"
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
          <Input
            name="lastName"
            label="Sobrenome"
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
          <Input
            name="city"
            label="Cidade"
            value={city}
            onChange={(e) => {
              setCity(e.target.value);
            }}
          />
          <Input
            name="state"
            label="Estado"
            value={state}
            onChange={(e) => {
              setState(e.target.value);
            }}
          />
        </FieldsWrapper>
        <FieldsWrapper $columns={1}>
          <Input
            name="avatar"
            label="Link da sua foto (comece com http)"
            value={avatar}
            onChange={(e) => {
              setAvatar(e.target.value);
            }}
          />
          <Input
            name="whatsapp"
            label="Whatsapp (somente números)"
            value={whatsapp}
            onChange={(e) => {
              setWhatsapp(e.target.value);
            }}
          />
          <TextArea
            name="bio"
            label="Bio"
            value={bio}
            onChange={(e) => {
              setBio(e.target.value);
            }}
          />
        </FieldsWrapper>

        <Title>Sobre o seu trabalho</Title>
        <hr />
        <CheckboxTitle>Você cuida de:</CheckboxTitle>
        <FieldsWrapper $columns={2} style={{ marginTop: "1.6rem" }}>
          {patientsType.map((patientType, index) => (
            <Checkbox
              key={patientType.type}
              name="patients"
              value={patientType.type}
              label={patientType.title}
              checked={patients.includes(index)}
              onChange={() =>
                patients.includes(index)
                  ? setPatients(patients.filter((patient) => patient !== index))
                  : setPatients([...patients, index])
              }
            />
          ))}
        </FieldsWrapper>
        <FieldsWrapper $columns={1}>
          <Input
            name="cost"
            label="Custo por hora (em R$)"
            value={cost}
            onChange={(e) => {
              setCost(e.target.value);
            }}
          />
        </FieldsWrapper>

        <Title>Horários disponíveis</Title>
        <hr />

        {scheduleItems.map((scheduleItem, index) => {
          return (
            <FieldsWrapper key={index} $columns={3}>
              <Select
                name="week_day"
                label="Dia da Semana"
                value={scheduleItem.week_day}
                onChange={(e) =>
                  setScheduleItemValue(index, "week_day", e.target.value)
                }
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
                name="from_time"
                label="Das"
                type="time"
                value={scheduleItem.from_time}
                onChange={(e) => {
                  setScheduleItemValue(index, "from_time", e.target.value);
                }}
              />
              <Input
                name="to_time"
                label="Até"
                type="time"
                value={scheduleItem.to_time}
                onChange={(e) => {
                  setScheduleItemValue(index, "to_time", e.target.value);
                }}
              />
            </FieldsWrapper>
          );
        })}
        <AddNewTimeButton onClick={addNewScheduleItem} type="button">
          <Image
            src="/images/add.svg"
            alt="Novo horário"
            height="16"
            width="16"
          />
          Novo horário
        </AddNewTimeButton>
      </CaregiverFormWrapper>
      <Footer>
        <Warning>
          <Image
            src="/images/warning.svg"
            alt="Importante! Preencha todos os dados"
            height="32"
            width="32"
          />
          Importante! <br />
          Preencha todos os dados
        </Warning>
        <Button label="Salvar cadastro" color="secondary" type="submit" />
      </Footer>
    </form>
  );
};
