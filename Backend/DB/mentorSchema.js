const mongoose = require("mongoose"); 

const mentorSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    specialty: {
        type: String,
        default: 'Urban Gardening'
    },
    experience: {
        type: String,
        default: '0 years'
    },
    rating: {
        type: Number,
        default: 0
    },
    reviews: {
        type: Number,
        default: 0
    },
    availability: {
        type: String,
        default: 'Mon-Fri, 9AM-5PM'
    },
    hourlyRate: {
        type: Number,
        default: 0
    }
});

const Mentor = mongoose.model("Mentor", mentorSchema);
module.exports = Mentor; 