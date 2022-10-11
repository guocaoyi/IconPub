import { Test, TestingModule } from '@nestjs/testing'
import { AccountController } from '../controller/account.controller'
import { AppService } from '../service/app.service'

describe('AccountController', () => {
  let accountController: AccountController

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AccountController],
      providers: [AppService],
    }).compile()

    accountController = app.get<AccountController>(AccountController)
  })

  describe('Check', () => {
    it('should return "ok"', () => {
      expect(accountController.getHello()).toBe('Hello World!')
    })
  })
})
