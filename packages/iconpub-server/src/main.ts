import * as path from 'node:path'
import * as process from 'node:process'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { MainModule } from 'src/main.module'
import type { NestExpressApplication } from '@nestjs/platform-express'
import { NestFactory } from '@nestjs/core'
import { ValidationPipe } from '@nestjs/common'
import helmet from 'helmet'

const bootstrap = async () => {
  const app = await NestFactory.create<NestExpressApplication>(MainModule, {
    cors: false,
    logger: ['debug', 'error', 'warn', 'log'],
  })

  // cors
  app.use(
    helmet({
      crossOriginEmbedderPolicy: false,
    }),
  )
  app.enableCors({
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: '*',
    credentials: true,
  })

  // public
  app.useStaticAssets(path.join(__dirname, '..', 'publicaddBearerAuth'), { index: 'index.html' })
  app.setBaseViewsDir(path.join(__dirname, '..', 'public'))
  app.setGlobalPrefix('/api')

  // openapi(swagger)
  const config = new DocumentBuilder()
    .setTitle('IconPub OpenAPI')
    .setDescription('The iconpub API description')
    .addBearerAuth({ type: 'http', name: 'authorization', in: 'header' })
    .setVersion('0.0.1')
    .addTag('IconPub')
    .build()
  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('/__swagger', app, document)

  //
  app.useGlobalPipes(new ValidationPipe())

  // process listen port
  await app.listen(process.env.PORT || 3000)

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
}
bootstrap()
