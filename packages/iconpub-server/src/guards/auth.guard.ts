import {
  CanActivate,
  ExecutionContext,
  Injectable,
  Logger,
  UnauthorizedException,
} from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { Reflector } from '@nestjs/core'
import { Request } from 'express'

import { UserSession } from 'src/interfaces/session.interface'
import configuration from 'src/configs/configuration'

@Injectable()
export class AuthGuard implements CanActivate {
  private readonly logger: Logger = new Logger(AuthGuard.name)

  constructor(private readonly reflector: Reflector, private readonly jwtService: JwtService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest()
    const token = this.extractTokenFromHeader(request)
    if (!token) {
      throw new UnauthorizedException()
    }
    try {
      const session = await this.jwtService.verifyAsync<UserSession>(token, {
        secret: configuration().jwt.secret,
      })
      this.logger.debug(JSON.stringify(session))

      if (new Date().getTime() > session.exp * 1000) {
        this.logger.debug('expired')
        throw new UnauthorizedException('user session expired!')
      }

      request['user'] = session
    } catch {
      throw new UnauthorizedException()
    }
    return true
  }

  private extractTokenFromHeader(request: Request): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? []
    return type === 'Bearer' ? token : undefined
  }
}
