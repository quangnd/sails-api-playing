/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	createNewPet: function(req, res) {
    User.findOne(1).exec(function(err, user) {
      if (err) return res.serverError(err);

      // Queue up a record to be inserted into the join table
      user.pets.add({ breed: 'japan', type: 'dog', name: 'lulu' });

      // Save the user, creating the new associations in the join table
      user.save(function(err) {
        if (err) return res.serverError(err);

        return res.ok();
      })
    })
  }
};

