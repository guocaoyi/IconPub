import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

/**
 * IconPo
 * @description object storage po
 */
@Schema()
export class IconPo {
  @Prop()
  id: number

  name: string
  name_en: string
  name_zh: string
  name_zh_jp: string
  name_zh_qp: string

  category_en: string
  category_zh: string

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

  createdAt: string
  updatedAt?: string
  deletedAt?: string

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

  categoryEn: null
  categoryZh: null

  unicode: number /** unicode */

  projectId: number

  fontClass: string /** font class */
  freeze: 0 | 1
  path_attributes: 'fill="#25467A"|fill="#EE6F0B"'
  show_svg: string
}

export type CatDocument = IconPo & Document

export const IconSchema = SchemaFactory.createForClass(IconPo)

export class FontIcon extends IconPo {}
