const mongoose = require('mongoose');

const TestSchema = new mongoose.Schema({

    photo: {
        type: String
    }
});

module.exports = Test = mongoose.model('test', TestSchema);

