export enum PatientType {
  1 = "baby",
  2 = "child",
  3 = "teen",
  4 = "elder",
  5 = "sick",
  6 = "disabled",
}

export enum PatientTitle {
  1 = "Bebês",
  2 = "Crianças",
  3 = "Adolescentes",
  4 = "Idosos",
  5 = "Enfermos",
  6 = "PcD",
}

export enum WeekDay {
  0 = "Domingo",
  1 = "Segunda",
  2 = "Terça",
  3 = "Quarta",
  4 = "Quinta",
  5 = "Sexta",
  6 = "Sábado",
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
  id: number;
  type: PatientType;
  title: PatientTitle;
};

export type Schedule = {
  weekDay: WeekDay;
  fromTime: number;
  toTime: number;
};
