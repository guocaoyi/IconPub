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

  /** 名称 */
  name: 'preview-open'
  /** 名称（英文）*/
  name_en: 'preview-open'
  /** 名称（中文）*/
  name_zh: '预览-打开'
  /** 名称（中文简拼）*/
  name_zh_jp: string
  /** 名称（中文全拼）*/
  name_zh_qp: string

  category_en: null
  category_zh: null

  color_type: 1

  description: string
  /** 分组编号 */
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

  unicode: number /** unicode 码 */

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
