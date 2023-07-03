import { container } from 'tsyringe'

import '@modules/users/providers'
import './providers'

import IRpersRepository from '@modules/rpers/repositories/IRpersRepository'
import RpersRepository from '@modules/rpers/infra/typeorm/repositories/RpersRepository'

import IUsersRepository from '@modules/users/repositories/IUsersRepository'
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository'

import IUserTokensRepository from '@modules/users/repositories/IUserTokensRepository'
import UserTokensRepository from '@modules/users/infra/typeorm/repositories/UserTokensRepository'

import { IRpersSecondaryDataRepository } from '@modules/rpers/repositories/IRpersSecondaryDataRepository'
import { RpersSecondaryDataRepository } from '@modules/rpers/infra/typeorm/repositories/RpersSecondaryDataRepository'
import { IRperEditResourceRepository } from '@modules/rpers/repositories/IRperEditResourceRepository'
import { RperEditResourceRepository } from '@modules/rpers/infra/typeorm/repositories/RperEditResourceRepository'
import { IRperAcknowledgmentRepository } from '@modules/rpers/repositories/IRperAcknowledgmentRepository'
import { RperAcknowledgmentRepository } from '@modules/rpers/infra/typeorm/repositories/RperAcknowledgmentRepository'

container.registerSingleton<IRpersRepository>(
  'RpersRepository',
  RpersRepository,
)
container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
)
container.registerSingleton<IUserTokensRepository>(
  'UserTokensRepository',
  UserTokensRepository,
)
container.registerSingleton<IRpersSecondaryDataRepository>(
  'RpersSecondaryDataRepository',
  RpersSecondaryDataRepository,
)
container.registerSingleton<IRperEditResourceRepository>(
  'RperEditResourceRepository',
  RperEditResourceRepository,
)
container.registerSingleton<IRperAcknowledgmentRepository>(
  'RpersAcknowledgmentRepository',
  RperAcknowledgmentRepository,
)
