const mongoose = require('mongoose');
const SALT_WORK_FACTOR = 10;

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
});

UserSchema.plugin(require('mongoose-bcrypt'));

module.exports = mongoose.model('User', UserSchema);
