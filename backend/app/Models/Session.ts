import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Session extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public email: string

  @column()
  public password: string
}
