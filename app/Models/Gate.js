'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Gate extends Model {
    static get primaryKey(){
        return 'gate_id'
    }

    table (){
        return this.hasMany('App/Models/User')
    }
}


module.exports = Gate
