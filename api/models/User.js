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
      type: 'string',
      required: true
    },
    lastName: {
      type: 'string',
      required: true
    },
    password: {
      type: 'string',
      minLength: 6,
      required: true
    },
    gender: {
      type: 'string',
      enum: ['male', 'female'],
      defaultTo: 'male'
    },

    //Add reference to pet
    pets: {
      collection: 'pet',
      via: 'owners',
      dominant: true
    },

    // Attribute methods
    getFullName: function (){
      return this.firstName + ' ' + this.lastName;
    },
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

