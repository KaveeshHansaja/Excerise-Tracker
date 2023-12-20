const mongoose = require('mongoose');  // mongoose module

const Schema = mongoose.Schema; // schema variable

const excerciseSchema = new Schema({ // excercise schema
    username: { type: String, required: true },
    description: { type: String, required: true },
    duration: {type: Number, required: true },
    date: { type: Date, required: true },
}, {
    timestamps: true,
});

const Excercise = mongoose.model('Excercise', excerciseSchema); // excercise model

module.exports = Excercise; // export Excercise model