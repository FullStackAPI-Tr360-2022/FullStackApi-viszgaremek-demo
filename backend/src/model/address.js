const mongoose = require('mongoose');

const AddressSchema = mongoose.Schema({
    zip: Number,
    city: String,
    street: String,
});

module.exports = mongoose.model('Address', AddressSchema);
