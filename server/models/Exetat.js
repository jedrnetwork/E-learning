
const mongoose = require('mongoose');

const ExetatSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
        required: [true, 'must provide a title'],
    },
    section: {
        type: String,
        required: [true, 'must provide a section'],
    },
    subject: {
        type: String,
        required: [true, 'must provide a subject'],
    },
    year: {
        type: String,
        required: [true, 'must provide the year'],
    },
    type: {
        type: String,
        default: "question",
        enum: ["question", "answer"],
    },
    url: {
        type: String,
        required: [true, 'must provide the url'],
    },
})



module.exports = mongoose.model('Exetat', ExetatSchema)