const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
});
// userSchema.set('validateBeforeSave', false);
module.exports = mongoose.model("User", userSchema, "userTest")