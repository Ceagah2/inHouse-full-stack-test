import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Session from 'App/Models/Session'
export default class SessionsController {
  public async create({ request, response }: HttpContextContract) {
    const body = request.body()

    const session = await Session.create(body)
    response.status(201)

    return {
      data: session,
      message: 'Successfully logged in',
    }
  }
}
