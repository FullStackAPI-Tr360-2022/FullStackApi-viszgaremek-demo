const mongoose = require('mongoose');

const CategorySchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        validate: {
            validator: function(v) {
                return /^[a-űA-Ű \-\.]{5,25}$/.test(v);
            }
        }
    },
    description: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('Category', CategorySchema);
