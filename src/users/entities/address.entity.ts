import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Address {
 
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  addressLine1: string;

  @Column()
  addressLine2: string;

  @Column()
  street:string

  @Column()
  landmark:string

  @Column()
  pincode: number

  @Column()
  city:string

  @Column({ default: true })
  isPrimary: boolean;

  user:User;
}