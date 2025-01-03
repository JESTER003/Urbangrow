const mongoose = require("mongoose");

const equipmentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    availability: {
        type: String,
        enum: ['Available', 'Limited Availability', 'Not Available'],
        default: 'Available'
    },
    image: {
        type: String,
        required: true
    },
    farmerName: {
        type: String,
        required: true,
        trim: true
    },
    farmerMobile: {
        type: String,
        required: true,
        trim: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Equipment = mongoose.model("Equipment", equipmentSchema);
module.exports = Equipment
