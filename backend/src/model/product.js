const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
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
    price: {
        type: Number,
        required: true,
    },
    active: {
        type: Boolean,
        default: true,
    },
});

module.exports = mongoose.model('Product', ProductSchema);
