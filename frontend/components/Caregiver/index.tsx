/* eslint-disable @next/next/no-img-element */
import React from "react";
import { CaregiverWrapper } from "./styles";
import { Header, HeaderText } from "./styles/Header";
import { Caregiver as CaregiverType } from "./types";

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
  return (
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

      <p>{bio}</p>
    </CaregiverWrapper>
  );
};
