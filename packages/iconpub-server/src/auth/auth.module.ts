import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

import { AuthController } from 'src/auth/controller/auth.controller'
import { UsersController } from 'src/auth/controller/user.controller'
import { AuthService } from 'src/auth/service/auth.service'
import { UserService } from 'src/auth/service/user.service'

import { Org, OrgSchema } from './model/org.schema'
import { Role, RoleSchema } from './model/role.schema'
import { User, UserSchema } from './model/user.schema'

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Org.name, schema: OrgSchema },
      { name: Role.name, schema: RoleSchema },
      { name: User.name, schema: UserSchema },
    ]),
  ],
  providers: [AuthService, UserService],
  controllers: [AuthController, UsersController],
})
export class AuthModule {}
