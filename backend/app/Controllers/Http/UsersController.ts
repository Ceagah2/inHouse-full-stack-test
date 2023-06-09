import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class UsersController {
  public async store({ request, response }: HttpContextContract) {
    const body = request.body()

    const user = await User.create(body)
    response.status(201)
    return {
      status: response.status,
      data: user,
      message: 'User successfully created !',
    }
  }
}
