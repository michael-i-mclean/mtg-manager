import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Card {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  scryfallId: string;

  @Column()
  name: string;

  @Column()
  set: string;

  @Column()
  collectorNumber: string;

  @Column({ default: 0 })
  owned: number;
}
