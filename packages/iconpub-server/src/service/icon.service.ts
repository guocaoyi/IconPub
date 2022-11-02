import { Injectable } from '@nestjs/common'

/**
 * ICON Service
 * @author yalda
 */
@Injectable()
export class IconService {
  getIcon(): any {
    return { name: '' }
  }
}
