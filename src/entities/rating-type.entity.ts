import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { Rating } from './rating.entity';

@Entity()
export class RatingType {
  constructor(type: string) {
    this.type = type;
  }
  @PrimaryGeneratedColumn()
  id: number;

  @Column({type: 'varchar', length: 255})
  type: string;
}