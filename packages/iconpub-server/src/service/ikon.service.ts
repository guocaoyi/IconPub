import { Injectable } from '@nestjs/common'

/**
 * IKON Service
 * @author gyaldacy
 * @description_zh IKON Service
 */
@Injectable()
export class IkonService {
  getIkon(): any {
    return { name: '' }
  }
}
