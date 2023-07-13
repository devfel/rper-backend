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
import { Expose } from 'class-transformer';
import { RperSecondaryData } from './RperSecondaryData';
import { RperAcknowledgment } from './RperAcknowledgment';
import { RperFinalConsideration } from './RperFinalConsideration';
import { RperHistoricalMapping } from './RperHistoricalMapping';
import { RperTransectWalk } from './RperTransectWalk';
import { RperExtraInformation } from './RperExtraInformation';
import { RperOtherFieldwork } from './RperOtherFieldwork';
import { RperPrioritiesElection } from './RperPrioritiesElection';
import { RperRealityAndObjMatrix } from './RperRealityAndObjMatrix';
import { RperFocusGroup } from './RperFocusGroup';
import { RperConstruction } from './RperConstruction';
import { RperInputAndOutput } from './RperInputAndOutput';
import { RperDailyRoutine } from './RperDailyRoutine';
import { RperSeasonalCalendar } from './RperSeasonalCalendar';
import { RperVennDiagram } from './RperVennDiagram';
import { RperPresentation } from './RperPresentation';
import { RperInterviews } from './RperInterviews';
import { RperOtherPreparation } from './RperOtherPreparation';
import { RperThemesFramework } from './RperThemesFramework';


@Entity('rpers')
class Rper {
  @PrimaryGeneratedColumn('uuid')
  rper_id: string

  @Column()
  name: string

  @Column()
  coordinator_id: string

  @Column()
  background: string

  @ManyToOne(() => User, { eager: true })
  @JoinColumn({ name: 'coordinator_id' })
  coordinator: User

  @ManyToMany(() => User, { eager: true })
  @JoinTable({
    name: 'rper_members',
    joinColumns: [{ name: 'rper_id' }],
    inverseJoinColumns: [{ name: 'user_id' }],
  })
  members: User[]

  @OneToOne(() => RperSecondaryData, secondaryData => secondaryData.rper, { eager: true })
  @JoinColumn({ name: 'rper_id' })
  secondaryData: RperSecondaryData;

  @OneToOne(() => RperAcknowledgment, acknowledgment => acknowledgment.rper, { eager: true })
  @JoinColumn({ name: 'rper_id' })
  acknowledgment: RperAcknowledgment;

  @OneToOne(() => RperHistoricalMapping, historicalMapping => historicalMapping.rper, { eager: true })
  @JoinColumn({ name: 'rper_id' })
  historicalMapping: RperHistoricalMapping;

  @OneToOne(() => RperTransectWalk, historicalMapping => historicalMapping.rper, { eager: true })
  @JoinColumn({ name: 'rper_id' })
  transectWalk: RperTransectWalk;

  @OneToOne(() => RperFinalConsideration, finalconsideration => finalconsideration.rper, { eager: true })
  @JoinColumn({ name: 'rper_id' })
  finalconsideration: RperFinalConsideration;

  @OneToOne(() => RperExtraInformation, extrainformation => extrainformation.rper, { eager: true })
  @JoinColumn({ name: 'rper_id' })
  extrainformation: RperExtraInformation;

  @OneToOne(() => RperOtherFieldwork, otherfieldwork => otherfieldwork.rper, { eager: true })
  @JoinColumn({ name: 'rper_id' })
  otherfieldwork: RperOtherFieldwork;

  @OneToOne(() => RperPrioritiesElection, prioritieselection => prioritieselection.rper, { eager: true })
  @JoinColumn({ name: 'rper_id' })
  prioritieselection: RperPrioritiesElection;

  @OneToOne(() => RperRealityAndObjMatrix, realityandobjmatrix => realityandobjmatrix.rper, { eager: true })
  @JoinColumn({ name: 'rper_id' })
  realityandobjmatrix: RperRealityAndObjMatrix;

  @OneToOne(() => RperFocusGroup, focusgroup => focusgroup.rper, { eager: true })
  @JoinColumn({ name: 'rper_id' })
  focusgroup: RperFocusGroup;

  @OneToOne(() => RperConstruction, construction => construction.rper, { eager: true })
  @JoinColumn({ name: 'rper_id' })
  construction: RperConstruction;

  @OneToOne(() => RperInputAndOutput, inputandoutput => inputandoutput.rper, { eager: true })
  @JoinColumn({ name: 'rper_id' })
  inputandoutput: RperInputAndOutput;

  @OneToOne(() => RperDailyRoutine, dailyroutine => dailyroutine.rper, { eager: true })
  @JoinColumn({ name: 'rper_id' })
  dailyroutine: RperDailyRoutine;

  @OneToOne(() => RperSeasonalCalendar, seasonalcalendar => seasonalcalendar.rper, { eager: true })
  @JoinColumn({ name: 'rper_id' })
  seasonalcalendar: RperSeasonalCalendar;

  @OneToOne(() => RperVennDiagram, venndiagram => venndiagram.rper, { eager: true })
  @JoinColumn({ name: 'rper_id' })
  venndiagram: RperVennDiagram;

  @OneToOne(() => RperPresentation, presentation => presentation.rper, { eager: true })
  @JoinColumn({ name: 'rper_id' })
  presentation: RperPresentation;

  @OneToOne(() => RperInterviews, interviews => interviews.rper, { eager: true })
  @JoinColumn({ name: 'rper_id' })
  interviews: RperInterviews;

  @OneToOne(() => RperOtherPreparation, otherpreparation => otherpreparation.rper, { eager: true })
  @JoinColumn({ name: 'rper_id' })
  otherpreparation: RperOtherPreparation;

  @OneToOne(() => RperThemesFramework, themesframework => themesframework.rper, { eager: true })
  @JoinColumn({ name: 'rper_id' })
  themesframework: RperThemesFramework;

  @CreateDateColumn()
  created_at: Date

  @Column({ default: 'now()' })
  updated_at: Date

  @Expose({ name: 'background_url' })
  getBackgroundUrl(): string | null {
    return this.background
      ? `${process.env.APP_API_URL}/files/${this.background}`
      : null
  }
}

export default Rper
