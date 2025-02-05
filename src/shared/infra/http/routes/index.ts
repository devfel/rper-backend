import { Router } from 'express'
import rpersRouter from '@modules/rpers/infra/http/routes/rpers.routes'
import usersRouter from '@modules/users/infra/http/routes/users.routes'
import sessionsRouter from '@modules/users/infra/http/routes/sessions.routes'
import passwordRouter from '@modules/users/infra/http/routes/password.routes'
import profileRouter from '@modules/users/infra/http/routes/profile.routes'

console.log('Resolved Path for rpers.routes')

const routes = Router()

routes.use('/users', usersRouter)
routes.use('/rpers', rpersRouter)
routes.use('/sessions', sessionsRouter)
routes.use('/password', passwordRouter)
routes.use('/profile', profileRouter)

export default routes
