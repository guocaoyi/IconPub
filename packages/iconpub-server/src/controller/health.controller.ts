import { Controller, Get } from '@nestjs/common'
import { HealthCheck, HealthCheckService, TypeOrmHealthIndicator } from '@nestjs/terminus'

@Controller('/api/check')
export class HealthController {
  constructor(private health: HealthCheckService, private db: TypeOrmHealthIndicator) {}

  @Get()
  @HealthCheck()
  healthCheck() {
    return 'ok'
  }

  @Get('/db')
  check() {
    return this.health.check([() => this.db.pingCheck('database', { timeout: 300 })])
  }
}
