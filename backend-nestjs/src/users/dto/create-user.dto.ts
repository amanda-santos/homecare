export class ScheduleDto {
  week_day: number;
  from: number;
  to: number;
}
export class CreateUserDto {
  firstName: string;
  lastName: string;
  city: string;
  state: string;
  avatar: string;
  phone: string;
  bio: string;

  schedules: ScheduleDto[];
}
