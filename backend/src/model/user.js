const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        index: {
            unique: true,
        },
    },
    lastName: String,
    firstName: String,
    address: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Address',
    },
});

// User.findAll().populate('address');

UserSchema.plugin(require('mongoose-bcrypt'));

module.exports = mongoose.model('User', UserSchema);

/*
Group
  .find({})
  .populate({
    path: 'users',			
    populate: { 
        path:  'address',
        model: 'address',
        populate: {
            path: ['zip', 'city', 'street'],
            model: '',
            populate: {
                path: '',
                model: ''
            }
        }
    }
  })
*/
