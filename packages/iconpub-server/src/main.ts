import * as path from 'node:path'
import * as process from 'node:process'
import * as session from 'express-session'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'
import { NestFactory } from '@nestjs/core'

import { AppModule } from './app.module'

import type { NestExpressApplication } from '@nestjs/platform-express'

const bootstrap = async () => {
  // app instance
  const app = await NestFactory.create<NestExpressApplication>(AppModule)

  // session
  app.use(
    session({
      secret: 'IP_SECRET',
      resave: false,
      saveUninitialized: false,
    }),
  )

  // public
  app.useStaticAssets(path.join(__dirname, '..', 'public'), { index: 'index.html' })
  app.setBaseViewsDir(path.join(__dirname, '..', 'public'))

  // service health check
  // - logger
  // - tracing
  // - error handling
  // - crash reporter

  // process health
  process.on('uncaughtException', (e) => {
    console.error(e)
  })
  process.on('uncaughtExceptionMonitor', (e) => {
    console.error(e)
  })
  process.on('unhandledRejection', (e) => {
    console.error(e)
  })

  /**
   * doc(swagger)
   * - swagger
   */
  const config = new DocumentBuilder()
    .setTitle('IconPub OpenAPI')
    .setDescription('The iconpub API description')
    .setVersion('0.0.1')
    .addTag('IconPub')
    .build()

  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('/swagger', app, document)

  // storage & cache
  // - mongo

  await app.listen(4001)
}
bootstrap()
