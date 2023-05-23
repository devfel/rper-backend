import User from '@modules/users/infra/typeorm/entities/User';
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { uuid } from 'uuidv4';
import Rper from './Rper';

@Entity('user_edit_resources')
export class RperEditResource {
  @PrimaryColumn()
  id: string;

  @Column()
  rper_id: string;

  @Column()
  user_id: string;

  @Column()
  resource: string;

  @CreateDateColumn()
  created_at: Date;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => Rper)
  @JoinColumn({ name: 'rper_id' })
  rper: Rper;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
