/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */
var bcrypt = require('bcrypt');

module.exports = {
  // A user may have many pets
  attributes: {
    firstName: {
      type: 'string'
    },
    lastName: {
      type: 'string'
    },
    password: {
      type: 'string',
      minLength: 6,
      required: true
    },

    //Add reference to pet
    pets: {
      collection: 'pet',
      via: 'owners',
      dominant: true
    }
  },

  // Lifecycle Callbacks
  beforeCreate: function(values, cb) {
    bcrypt.hash(values.password, 10, function(err, hash) {
      if (err) cb(err);

      values.password = hash;
       //calling cb() with an argument returns an error. Useful for canceling the entire operation if some criteria fails.
      cb();

    });
  }

  //See dominance and many to many relationship at
  //https://sailsjs.com/documentation/concepts/models-and-orm/associations/dominance
};

