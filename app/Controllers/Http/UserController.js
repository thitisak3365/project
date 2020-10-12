'use strict'

const Database = use('Database')

class UsersController {

  * index (request, response) {
    const users = yield Database.select('*').from('users')
    response.json(users)
  }

}
module.exports = UsersController