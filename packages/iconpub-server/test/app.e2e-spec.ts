import * as request from 'supertest'
import { Test, TestingModule } from '@nestjs/testing'
import { INestApplication } from '@nestjs/common'
import { MainModule } from 'src/main.module'

describe('MainModule (e2e)', () => {
  let app: INestApplication

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [MainModule],
    }).compile()

    app = moduleFixture.createNestApplication()
    await app.init()
  })

  it('/check (GET)', () => {
    return request(app.getHttpServer()).get('/check').expect(200).expect('ok')
  })
})
