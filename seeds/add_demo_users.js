'use strict'

const User = require('../models/User')

module.exports.seed = (knex, Promise) => {
  return new User({ 
    Name: 'Jack',
    email: 'a@b.com',
  }).save()
}