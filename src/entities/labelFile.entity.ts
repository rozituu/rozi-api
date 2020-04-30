import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Rating } from './rating.entity';

@Entity()
export class LabelFile {
  constructor(fileUrl: string, mimeType: string) {
    this.fileUrl = fileUrl;
    this.mimeType = mimeType;
  }
  @PrimaryGeneratedColumn()
  id: number;

  @Column({type: 'varchar', length: 255})
  fileUrl: string;

  @Column({type: 'varchar', length: 20})
  mimeType: string;
 
  @OneToMany(type => Rating, rating => rating.labelFile) 
  ratings: Rating[];
  
}