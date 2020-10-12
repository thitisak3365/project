'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class GateSchema extends Schema {
  up () {
    this.create('gates', (table) => {
      table.integer('date').notNullable()
      table.integer('time_in').notNullable()
      table.integer('time_out').notNullable()
      table.integer('location').notNullable()
      table.string('place').notNullable()
      table.integer('temperature').notNullable()
      table.integer('id_card').notNullable().unique()
    })
  }

  down () {
    this.drop('gates')
  }
}

module.exports = GateSchema
