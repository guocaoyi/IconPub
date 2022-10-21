import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

/**
 * IconPo
 * @description object storage po
 * @description_zh 对象储存持久对象
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

  category_en: null
  category_zh: null

  color_type: 1

  description: string

  groupId: number
  iconVersion: null

  ownerId: string
  render_type: 1
  resource: string
  sourceType: 0
  subgroupId: 0
  type: 0

  _extraInfo: null

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
  project_id: number

  font_class: string /** font class */
  freeze: 0 | 1
  path_attributes: 'fill="#25467A"|fill="#EE6F0B"'
  show_svg: string
}

export type CatDocument = IconPo & Document

export const IkonSchema = SchemaFactory.createForClass(IconPo)

export class FontIcon extends IconPo {}
