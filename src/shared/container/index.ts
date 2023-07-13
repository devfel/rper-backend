import { container } from 'tsyringe';

import '@modules/users/providers';
import './providers';

import IRpersRepository from '@modules/rpers/repositories/IRpersRepository';
import RpersRepository from '@modules/rpers/infra/typeorm/repositories/RpersRepository';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';

import IUserTokensRepository from '@modules/users/repositories/IUserTokensRepository';
import UserTokensRepository from '@modules/users/infra/typeorm/repositories/UserTokensRepository';

import { IRperEditResourceRepository } from '@modules/rpers/repositories/IRperEditResourceRepository';
import { RperEditResourceRepository } from '@modules/rpers/infra/typeorm/repositories/RperEditResourceRepository';
import { IRpersSecondaryDataRepository } from '@modules/rpers/repositories/IRpersSecondaryDataRepository';
import { RpersSecondaryDataRepository } from '@modules/rpers/infra/typeorm/repositories/RpersSecondaryDataRepository';
import { IRperAcknowledgmentRepository } from '@modules/rpers/repositories/IRperAcknowledgmentRepository';
import { RperAcknowledgmentRepository } from '@modules/rpers/infra/typeorm/repositories/RperAcknowledgmentRepository';
import { IRperFinalConsiderationRepository } from '@modules/rpers/repositories/IRperFinalConsiderationRepository'
import { RperFinalConsiderationRepository } from '@modules/rpers/infra/typeorm/repositories/RperFinalConsiderationRepository'
import { IRperHistoricalMappingRepository } from '@modules/rpers/repositories/IRperHistoricalMappingRepository'
import { RperHistoricalMappingRepository } from '@modules/rpers/infra/typeorm/repositories/RperHistoricalMappingRepository'
import { IRperTransectWalkRepository } from '@modules/rpers/repositories/IRperTransectWalkRepository'
import { RperTransectWalkRepository } from '@modules/rpers/infra/typeorm/repositories/RperTransectWalkRepository'
import { RperExtraInformationRepository } from '@modules/rpers/infra/typeorm/repositories/RperExtraInformationRepository';
import { IRperExtraInformationRepository } from '@modules/rpers/repositories/IRperExtraInformationRepository';
import { RperConstructionRepository } from '@modules/rpers/infra/typeorm/repositories/RperConstructionRepository';
import { RperDailyRoutineRepository } from '@modules/rpers/infra/typeorm/repositories/RperDailyRoutineRepository';
import { RperFocusGroupRepository } from '@modules/rpers/infra/typeorm/repositories/RperFocusGroupRepository';
import { RperInputAndOutputRepository } from '@modules/rpers/infra/typeorm/repositories/RperInputAndOutputRepository';
import { RperInterviewsRepository } from '@modules/rpers/infra/typeorm/repositories/RperInterviewsRepository';
import { RperOtherFieldworkRepository } from '@modules/rpers/infra/typeorm/repositories/RperOtherFieldworkRepository';
import { RperOtherPreparationRepository } from '@modules/rpers/infra/typeorm/repositories/RperOtherPreparationRepository';
import { RperPresentationRepository } from '@modules/rpers/infra/typeorm/repositories/RperPresentationRepository';
import { RperPrioritiesElectionRepository } from '@modules/rpers/infra/typeorm/repositories/RperPrioritiesElectionRepository';
import { RperRealityAndObjMatrixRepository } from '@modules/rpers/infra/typeorm/repositories/RperRealityAndObjMatrixRepository';
import { RperSeasonalCalendarRepository } from '@modules/rpers/infra/typeorm/repositories/RperSeasonalCalendarRepository';
import { RperThemesFrameworkRepository } from '@modules/rpers/infra/typeorm/repositories/RperThemesFrameworkRepository';
import { RperVennDiagramRepository } from '@modules/rpers/infra/typeorm/repositories/RperVennDiagramRepository';
import { IRperConstructionRepository } from '@modules/rpers/repositories/IRperConstructionRepository';
import { IRperDailyRoutineRepository } from '@modules/rpers/repositories/IRperDailyRoutineRepository';
import { IRperFocusGroupRepository } from '@modules/rpers/repositories/IRperFocusGroupRepository';
import { IRperInputAndOutputRepository } from '@modules/rpers/repositories/IRperInputAndOutputRepository';
import { IRperInterviewsRepository } from '@modules/rpers/repositories/IRperInterviewsRepository';
import { IRperOtherFieldworkRepository } from '@modules/rpers/repositories/IRperOtherFieldworkRepository';
import { IRperOtherPreparationRepository } from '@modules/rpers/repositories/IRperOtherPreparationRepository';
import { IRperPresentationRepository } from '@modules/rpers/repositories/IRperPresentationRepository';
import { IRperPrioritiesElectionRepository } from '@modules/rpers/repositories/IRperPrioritiesElectionRepository';
import { IRperRealityAndObjMatrixRepository } from '@modules/rpers/repositories/IRperRealityAndObjMatrixRepository';
import { IRperSeasonalCalendarRepository } from '@modules/rpers/repositories/IRperSeasonalCalendarRepository';
import { IRperThemesFrameworkRepository } from '@modules/rpers/repositories/IRperThemesFrameworkRepository';
import { IRperVennDiagramRepository } from '@modules/rpers/repositories/IRperVennDiagramRepository';

container.registerSingleton<IRpersRepository>('RpersRepository', RpersRepository);
container.registerSingleton<IUsersRepository>('UsersRepository', UsersRepository);
container.registerSingleton<IUserTokensRepository>('UserTokensRepository', UserTokensRepository);
container.registerSingleton<IRpersSecondaryDataRepository>(
  'RpersSecondaryDataRepository',
  RpersSecondaryDataRepository,
);
container.registerSingleton<IRperAcknowledgmentRepository>(
  'RpersAcknowledgmentRepository',
  RperAcknowledgmentRepository,
);
container.registerSingleton<IRperFinalConsiderationRepository>(
  'RpersFinalConsiderationRepository',
  RperFinalConsiderationRepository,
);
container.registerSingleton<IRperHistoricalMappingRepository>(
  'RperHistoricalMappingRepository',
  RperHistoricalMappingRepository,
);
container.registerSingleton<IRperTransectWalkRepository>(
  'RperTransectWalkRepository',
  RperTransectWalkRepository,
);
container.registerSingleton<IRperExtraInformationRepository>(
  'RpersExtraInformationRepository',
  RperExtraInformationRepository,
);
container.registerSingleton<IRperOtherFieldworkRepository>(
  'RpersOtherFieldworkRepository',
  RperOtherFieldworkRepository,
);
container.registerSingleton<IRperPrioritiesElectionRepository>(
  'RpersPrioritiesElectionRepository',
  RperPrioritiesElectionRepository,
);
container.registerSingleton<IRperRealityAndObjMatrixRepository>(
  'RpersRealityAndObjMatrixRepository',
  RperRealityAndObjMatrixRepository,
);
container.registerSingleton<IRperFocusGroupRepository>(
  'RpersFocusGroupRepository',
  RperFocusGroupRepository,
);
container.registerSingleton<IRperConstructionRepository>(
  'RpersConstructionRepository',
  RperConstructionRepository,
);
container.registerSingleton<IRperInputAndOutputRepository>(
  'RpersInputAndOutputRepository',
  RperInputAndOutputRepository,
);
container.registerSingleton<IRperDailyRoutineRepository>(
  'RpersDailyRoutineRepository',
  RperDailyRoutineRepository,
);
container.registerSingleton<IRperSeasonalCalendarRepository>(
  'RpersSeasonalCalendarRepository',
  RperSeasonalCalendarRepository,
);
container.registerSingleton<IRperVennDiagramRepository>(
  'RpersVennDiagramRepository',
  RperVennDiagramRepository,
);
container.registerSingleton<IRperPresentationRepository>(
  'RpersPresentationRepository',
  RperPresentationRepository,
);
container.registerSingleton<IRperInterviewsRepository>(
  'RpersInterviewsRepository',
  RperInterviewsRepository,
);
container.registerSingleton<IRperOtherPreparationRepository>(
  'RpersOtherPreparationRepository',
  RperOtherPreparationRepository,
);
container.registerSingleton<IRperThemesFrameworkRepository>(
  'RpersThemesFrameworkRepository',
  RperThemesFrameworkRepository,
);


container.registerSingleton<IRperEditResourceRepository>(
  'RperEditResourceRepository',
  RperEditResourceRepository,
);
