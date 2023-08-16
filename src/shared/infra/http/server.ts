//import dotenv, { config } from "dotenv";
import 'reflect-metadata'
import 'dotenv/config'
import cors from 'cors'
import { errors } from 'celebrate'

import express, { Request, Response, NextFunction } from 'express'
import 'express-async-errors'

import routes from './routes'
import AppError from '@shared/errors/AppError'

import uploadConfig from '@config/upload'
import '@shared/infra/typeorm'
import '@shared/container'

//dotenv.config();
const app = express()

//Swagger Configuration
//Extended: https://swagger.io/specifications/#infoObject
import swaggerJsDoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'
const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: 'RPER API Documentation',
      version: '0.6.0',
      description:
        'Rapid Participatory Emancipatory Research (RPER) consist of intervention techniques that allow qualitative and quantitative information to be obtained from a collectivity in a short period. This information is then used to identify problems, their causes, and possible solutions, with the goal of promoting social change and development. The method was specifically designed to intervene, in a planned way, in the complex reality of social groups such as rural land reform settlements, associations, cooperatives, among others.',
      contact: {
        name: '- Luiz Flavio Felizardo',
        email: 'devfelizardo@gmail.com',
      },
      servers: ['http://localhost:3333'],
    },
  },
  apis: ['**/*.routes.ts'],
  //apis: ['.routes/*.js']
  //apis: ['../../../modules/users/infra/http/routes/*.ts']
}
const swaggerDocs = swaggerJsDoc(swaggerOptions)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))
//End of Swagger Configuration

app.use(cors())
app.use(express.json())
app.use('/files', express.static(uploadConfig.uploadsFolder))
app.use(routes)

app.use(errors())

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        status: 'error',
        message: err.message,
      })
    } else {
      console.log('Unexpected Error', err)
      return response.status(500).json({
        status: 'error',
        message: 'Unexpected Error',
      })
    }
  },
)

app.listen(process.env.PORT, () => {
  console.log(`Server started on port ${process.env.PORT}!`)
})
