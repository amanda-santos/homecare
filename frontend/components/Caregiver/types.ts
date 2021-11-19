export enum PatientType {
  "baby",
  "child",
  "teen",
  "elder",
  "sick",
  "disabled",
}

export enum PatientTitle {
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
  schedules: Schedule[];
};

export type Patient = {
  type: PatientType;
  title: PatientTitle;
};

export type Schedule = {
  weekDay: number;
  fromTime: number;
  toTime: number;
};
