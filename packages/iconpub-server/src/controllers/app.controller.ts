import { Controller, Get } from '@nestjs/common'
import { HealthCheck, HealthCheckService, TypeOrmHealthIndicator } from '@nestjs/terminus'

@Controller('check')
export class AppController {
  constructor(private health: HealthCheckService, private db: TypeOrmHealthIndicator) {}

  @Get()
  @HealthCheck()
  healthCheck() {
    return 'ok'
  }

  @Get('/db')
  check() {
    return this.health.check([() => this.db.pingCheck('check', { timeout: 300 })])
  }
}
