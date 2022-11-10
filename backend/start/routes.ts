import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.get('/', async () => {
    return { message: 'API is running at localhost port 3333' }
  })

  Route.resource('/users', 'UsersController')

  Route.post('/login', 'SessionsController.create')
}).prefix('/api')
