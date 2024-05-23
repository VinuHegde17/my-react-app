const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true 
    },
    review: {
        type: String,
        required: true 
    },
    rating: {
        type: Number,
        required: true, 
        min: 1, 
        max: 5 
    }
}, {
    versionKey: false 
});

const UserModel = mongoose.model("reviews", UserSchema);

module.exports = UserModel;
