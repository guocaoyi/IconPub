import { Injectable } from '@nestjs/common'

@Injectable()
export class UserService {
  getUser(): any {
    return { name: '' }
  }
}
