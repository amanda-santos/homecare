import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Schedule } from './schedule.entitiy';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn() id: number;
  @Column() firstName: string;
  @Column() lastName: string;
  @Column() city: string;
  @Column() state: string;
  @Column() avatar: string;
  @Column() phone: string;
  @Column() bio: string;

  @OneToMany(() => Schedule, (schedule) => schedule.user)
  schedules: Schedule[];
}
