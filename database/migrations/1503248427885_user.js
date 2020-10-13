'use strict'

const Database = use('Database')

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.create('users', (table) => {
      table.increments()
      table.string('name').notNullable()
      table.string('last_name').notNullable()
      table.integer('BirthDay').notNullable()
      table.integer('IDcard',13).notNullable().unique()
      table.string('nationality').notNullable()
      table.string('address').notNullable()
      table.integer('student_code',9 ).notNullable().unique()
      table.string('Department').notNullable()
      table.string('Email').notNullable().unique()
      table.string('user_name', 80).notNullable().unique()
      table.string('email', 254).notNullable().unique()
      table.string('password', 60).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UserSchema
 