'use strict';

const knex = require('knex')

module.exports.up = (knex, Promise) => {
	return knex.schema.table('Users', (table) => {
  	table.dropColumn('password')
  })
};

module.exports.down = (knex, Promise) => {
	return knex.schema.table('Users', (table) => {
  	table.string('password')
  })
};