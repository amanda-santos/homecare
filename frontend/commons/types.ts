export enum PatientType {
  "baby",
  "child",
  "teen",
  "elder",
  "sick",
  "disabled",
}

export enum PatientTitle {
  "Bebês (0 a 4 anos)",
  "Crianças (4 a 12 anos)",
  "Adolescentes (12 a 18 anos)",
  "Idosos",
  "Enfermos",
  "Pessoas com Deficiência (PcD)",
}

export enum PatientShortTitle {
  "Bebês",
  "Crianças",
  "Adolescentes",
  "Idosos",
  "Enfermos",
  "PcD",
}

export enum PatientEmoji {
  "👶🏾",
  "👧🏻",
  "👩🏽",
  "👴🏻",
  "🤒",
  "♿",
}

export enum WeekDay {
  "Domingo",
  "Segunda",
  "Terça",
  "Quarta",
  "Quinta",
  "Sexta",
  "Sábado",
}

export type Caregiver = {
  id: number;
  firstName: string;
  lastName: string;
  avatar: string;
  city: string;
  state: string;
  bio: string;
  cost: number;
  whatsapp: string;
  patients: number[];
  schedule: Schedule[];
};

export type Patient = {
  type: PatientType;
  title: PatientTitle;
};

export const getPatients = () => {
  const PATIENTS_NUMBER = Object.keys(PatientType).length / 2;
  const patients = [];

  for (let i = 0; i < PATIENTS_NUMBER; i++) {
    patients.push({
      type: PatientType[i],
      title: PatientTitle[i],
      emoji: PatientEmoji[i],
    });
  }

  return patients;
};

export type Schedule = {
  weekDay: number;
  fromTime: number;
  toTime: number;
};
