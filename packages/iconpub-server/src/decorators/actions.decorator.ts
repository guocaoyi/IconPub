import { SetMetadata } from '@nestjs/common'

import { Action } from 'src/models/enum/action.enum'

export const ACTION_KEY = 'actions'
export const Actions = (...actions: Action[]) => SetMetadata(ACTION_KEY, actions)
