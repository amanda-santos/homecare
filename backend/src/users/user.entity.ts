import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

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
}
