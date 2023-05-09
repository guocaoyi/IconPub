import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

/**
 * Icon
 */
@Schema()
export class Icon {
  @Prop({ required: true })
  id: number

  @Prop({ required: true })
  name: string
  name_zh_py: string
  name_zh_qp: string

  @Prop([String])
  category: string[]
  categoryEn: null
  categoryZh: null

  colorType: number

  description: string

  groupId: number
  iconVersion: null

  ownerId: string
  renderType: number
  resource: string
  sourceType: number
  subgroupId: number
  type: number

  _extraInfo: string

  /** icon ablum id */
  albumId: number

  /** name(eg) */
  nameEn: string
  /** name(zh_CN) */
  nameZh: string
  /** name(simple spelling) */
  nameZhJp: string
  /** name() */
  nameZhQp: string

  unicode: number /** unicode */

  projectId: number

  fontClass: string /** font class */

  freeze: 0 | 1

  path_attributes: 'fill="#25467A"|fill="#EE6F0B"'

  show_svg: string

  createdAt: string
  updatedAt?: string
  deletedAt?: string
}

export type IconDocument = Icon & Document

export const IconSchema = SchemaFactory.createForClass(Icon)
