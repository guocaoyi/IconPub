import * as path from 'node:path'
import * as process from 'node:process'
import * as session from 'express-session'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'
import { NestFactory } from '@nestjs/core'

import { MainModule } from './main.module'

import type { NestExpressApplication } from '@nestjs/platform-express'

const bootstrap = async () => {
  // app instance
  const app = await NestFactory.create<NestExpressApplication>(MainModule)

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

  // doc(swagger)
  const config = new DocumentBuilder()
    .setTitle('IconPub OpenAPI')
    .setDescription('The iconpub API description')
    .setVersion('0.0.1')
    .addTag('IconPub')
    .build()
  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('/__swagger', app, document)

  // process listen port
  await app.listen(4001)
}
bootstrap()
