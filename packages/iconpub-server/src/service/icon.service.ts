import { Injectable } from '@nestjs/common'

/**
 * IKON Service
 * @author yalda
 * @description_zh IKON Service
 */
@Injectable()
export class IconService {
  getIkon(): any {
    return { name: '' }
  }
}
