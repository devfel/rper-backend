import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
  ManyToMany,
  JoinTable,
  OneToOne,
} from 'typeorm';
import User from '@modules/users/infra/typeorm/entities/User';
import { RperSecondaryData } from './RperSecondaryData';
import { Expose } from 'class-transformer';

@Entity('rpers')
class Rper {
  @PrimaryGeneratedColumn('uuid')
  rper_id: string;

  @Column()
  name: string;

  @Column()
  coordinator_id: string;

  @Column()
  background: string;

  @ManyToOne(() => User, { eager: true })
  @JoinColumn({ name: 'coordinator_id' })
  coordinator: User;

  @ManyToMany(() => User, { eager: true })
  @JoinTable({
    name: 'rper_members',
    joinColumns: [{ name: 'rper_id' }],
    inverseJoinColumns: [{ name: 'user_id' }],
  })
  members: User[];

  @OneToOne(() => RperSecondaryData, secondaryData => secondaryData.rper, { eager: true })
  @JoinColumn({ name: 'rper_id' })
  secondaryData: RperSecondaryData;

  @CreateDateColumn()
  created_at: Date;

  @Column({ default: 'now()'})
  updated_at: Date;

  @Expose({ name: 'background_url' })
  getBackgroundUrl(): string | null {
    return this.background ? `${process.env.APP_API_URL}/files/${this.background}` : null;
  }
}

export default Rper;
