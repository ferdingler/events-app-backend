/**
 * Checkin
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  attributes: {
  	first: 'string',
  	last: 'string',
  	email: 'string',
  	gender: 'string',
  	id: {
  		type: 'string',
  		unique: true,
  		required: true
  	},
  	state: 'string',
  	age: 'numeric'
  },
  autoPK: false

};
