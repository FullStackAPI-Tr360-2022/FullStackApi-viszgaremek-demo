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
