import { Controller, Get } from '@nestjs/common'
import { HealthCheck, HealthCheckService, DNSHealthIndicator } from '@nestjs/terminus'

@Controller('health')
export class HealthController {
  constructor(private health: HealthCheckService, private dns: DNSHealthIndicator) {}

  @Get()
  @HealthCheck()
  healthCheck() {
    return this.health.check([() => this.dns.pingCheck('nestjs-docs', 'https://docs.nestjs.com')])
  }

  @Get('/check')
  check(): string {
    return 'ok'
  }
}
