import React, { useState } from "react";
import Image from "next/image";

import { Button, Checkbox, Input, Select } from "..";
import {
  AddNewTimeButton,
  CaregiverFormWrapper,
  CheckboxTitle,
  Footer,
  FieldsWrapper,
  Title,
  TitleWrapper,
  Warning,
} from "./styles";

type Props = {};

export const CaregiverForm = ({}: Props) => {
  const [weekDay, setWeekDay] = useState("");

  return (
    <>
      <CaregiverFormWrapper>
        <Title>Seus dados</Title>
        <hr />
        <FieldsWrapper $columns={2} style={{ marginTop: "3.2rem" }}>
          <Input name="name" label="Nome" />
          <Input name="lastName" label="Sobrenome" />
          <Input name="city" label="Cidade" />
          <Input name="state" label="Estado" />
        </FieldsWrapper>
        <FieldsWrapper $columns={1}>
          <Input name="avatar" label="Link da sua foto (comece com //http)" />
          <Input name="whatsapp" label="Whatsapp (somente números)" />
          <label htmlFor="bio">Bio</label>
          <textarea name="bio"></textarea>
        </FieldsWrapper>

        <Title>Sobre o seu trabalho</Title>
        <hr />
        <CheckboxTitle>Você cuida de:</CheckboxTitle>
        <FieldsWrapper $columns={2} style={{ marginTop: "1.6rem" }}>
          <Checkbox name="patients" value="baby" label="Bebês (0 a 3 anos)" />
          <Checkbox
            name="patients"
            value="child"
            label="Crianças (4 a 12 anos)"
          />
          <Checkbox
            name="patients"
            value="teen"
            label="Adolescentes (12 a 18 anos)"
          />
          <Checkbox name="patients" value="elder" label="Idosos" />
          <Checkbox name="patients" value="sick" label="Enfermos" />
          <Checkbox
            name="patients"
            value="disabled"
            label="Pessoas com Deficiência (PcD)"
          />
        </FieldsWrapper>
        <FieldsWrapper $columns={1}>
          <Input name="cost" label="Custo por hora (em R$)" />
        </FieldsWrapper>
        <TitleWrapper>
          <Title>Horários disponíveis</Title>
          <AddNewTimeButton>
            <Image
              src="/images/add.svg"
              alt="Novo horário"
              height="16"
              width="16"
            />
            Novo horário
          </AddNewTimeButton>
        </TitleWrapper>
        <hr />
        <FieldsWrapper $columns={3}>
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
          <Input name="fromTime" label="Das" type="time" />
          <Input name="toTime" label="Até" type="time" />
        </FieldsWrapper>
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
        <Button label="Salvar cadastro" color="secondary" />
      </Footer>
    </>
  );
};
