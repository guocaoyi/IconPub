import * as path from 'node:path'
import * as process from 'node:process'
import * as session from 'express-session'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'
import { NestFactory } from '@nestjs/core'
import { ValidationPipe } from '@nestjs/common'

import { MainModule } from 'src/main.module'

import type { NestExpressApplication } from '@nestjs/platform-express'

const bootstrap = async () => {
  // app instance
  const app = await NestFactory.create<NestExpressApplication>(MainModule, {
    cors: true,
    logger: ['debug', 'error', 'warn', 'log'],
  })

  //
  app.enableCors()

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
  app.setGlobalPrefix('/api')

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

  //
  app.useGlobalPipes(new ValidationPipe())

  // process listen port
  await app.listen(process.env.PORT || 3000)
}
bootstrap()
