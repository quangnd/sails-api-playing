/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  // A user may have many pets
  attributes: {
    firstName: {
      type: 'string'
    },
    lastName: {
      type: 'string'
    },

    //Add reference to pet
    pets: {
      collection: 'pet',
      via: 'owners',
      dominant: true
    }
  }

  //See dominance and many to many relationship at
  //https://sailsjs.com/documentation/concepts/models-and-orm/associations/dominance
};

