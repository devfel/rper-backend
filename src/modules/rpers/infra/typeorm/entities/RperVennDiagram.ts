import { Column, CreateDateColumn, Entity, OneToOne, PrimaryColumn, UpdateDateColumn } from 'typeorm';
import Rper from './Rper';

@Entity('rper_venndiagram')
export class RperVennDiagram {
    @PrimaryColumn({ type: 'uuid' })
    rper_id: string

    @Column()
    content: string;

    @Column()
    status: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @OneToOne(() => Rper, rper => rper.venndiagram)
    rper: Rper;
}