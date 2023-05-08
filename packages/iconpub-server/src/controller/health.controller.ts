import { Controller, Get } from '@nestjs/common'
import { HealthCheck, HealthCheckService, TypeOrmHealthIndicator } from '@nestjs/terminus'

@Controller('health')
export class HealthController {
  constructor(private health: HealthCheckService, private db: TypeOrmHealthIndicator) {}

  @Get()
  @HealthCheck()
  healthCheck() {
    return 'ok'
  }

  @Get('/check')
  check() {
    return this.health.check([() => this.db.pingCheck('database', { timeout: 300 })])
  }
}
