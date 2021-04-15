const mongoose = require('mongoose');



const InfoSchema = new mongoose.Schema({

    username: String
})

module.exports = Info = mongoose.model('info', InfoSchema);