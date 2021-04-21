const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({

    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    username: { type: String, required: true },
    birth: { type: String, required: true },
    gender: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    zip: { type: String, required: true },
    addressShip: { type: String, required: true },
    cityShip: { type: String, required: true },
    stateShip: { type: String, required: true },
    zipShip: { type: String, required: true },
    skill1: { type: String, required: true },
    skill2: { type: String, required: true },
    skill3: { type: String, required: true },
    skiing: { type: String, required: false },
    react: { type: String, required: false },
    email: { type: String, required: true },
    password: { type: String, required: true },
    photo: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now()
    }
})

module.exports = User = mongoose.model('user', UserSchema);