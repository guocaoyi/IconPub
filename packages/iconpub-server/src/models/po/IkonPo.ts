import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

export class FontIconPo {
  id: number
  name: string
  unicode: number /** unicode 码 */

  projectId: number
  project_id: number

  font_class: string /** font class */
  freeze: 0 | 1
  path_attributes: 'fill="#25467A"|fill="#EE6F0B"'
  show_svg: string
}

/**
 * IkonPo
 * @description object storage po
 * @description_zh 对象储存持久对象
 */
@Schema()
export class IkonPo {
  /** 图标编号 */
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
  groupID: number
  iconVersion: null

  ownerID: string
  render_type: 1
  resource: string
  sourceType: 0
  subgroupID: 0
  type: 0

  _extraInfo: null

  createdAt: string
  updatedAt?: string
  deletedAt?: string
}

export type CatDocument = IkonPo & Document

export const IkonSchema = SchemaFactory.createForClass(IkonPo)

export class FontIcon extends IkonPo {}
