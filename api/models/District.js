/**
 * District.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    name: {
      type: 'string'
    },
    note: {
      type: 'string'
    },

    // Add a reference to province
    province: {
      model: 'province'
    }
  }
};

