"use strict";

const uuid = require('uuid/v1');

/**
 * Sector
 * @description :: Model for storing Sector records
 */

module.exports = {
  schema: true,

  tableName: 'sectors',

  attributes: {
    name: {
      type: 'string',
      required: true
    },

    neighborhoods: {
      collection: 'neighborhood',
      via: 'sector'
    },
    
    toJSON() {
      return this.toObject();
    }
  },

  beforeUpdate: (values, next) => next(),

  beforeCreate: (values, next) => {
  	values.uuid = uuid();
  	return next()
  }
};
