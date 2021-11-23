import React from "react";
import { Button, Checkbox, Input } from "..";
import { CaregiverFormWrapper, FieldsWrapper, Title } from "./styles";

type Props = {};

export const CaregiverForm = ({}: Props) => {
  return (
    <CaregiverFormWrapper>
      <Title>Seus dados</Title>
      <hr />
      <FieldsWrapper $columns={2}>
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

        <Title>Sobre o seu trabalho</Title>
        <hr />
        <Checkbox name="patients" value="babies" label="Bebês (0 a 3 anos)" />
      </FieldsWrapper>
    </CaregiverFormWrapper>
  );
};
