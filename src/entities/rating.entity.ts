import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { LabelFile } from './labelFile.entity';
import { RatingType } from './rating-type.entity';

@Entity()
export class Rating {
  constructor(intensity?: number, label?: LabelFile, ratingType?: RatingType) {
    this.intensity = intensity;
    this.labelFile = label;
    this.ratingType = ratingType;
  }
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  intensity: number;
 
  @ManyToOne(type => LabelFile, file => file.ratings) 
  labelFile: LabelFile;

  @ManyToOne(() => RatingType) 
  ratingType: RatingType;
}