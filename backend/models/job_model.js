const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const jobSchema = new Schema({
    job:{
        type: String
    },
    status:{
        type: String
    }
})

module.exports = mongoose.model('activities', jobSchema);