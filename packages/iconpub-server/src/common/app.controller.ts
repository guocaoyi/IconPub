import { Controller, Get } from '@nestjs/common'
import { HealthCheck, HealthCheckService, TypeOrmHealthIndicator } from '@nestjs/terminus'

@Controller()
export class AppController {
  constructor(private health: HealthCheckService, private db: TypeOrmHealthIndicator) {}

  @Get('/check')
  @HealthCheck()
  healthCheck() {
    return 'ok'
  }

  @Get('/check/db')
  check() {
    return this.health.check([() => this.db.pingCheck('check', { timeout: 300 })])
  }
}
