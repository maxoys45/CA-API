const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: String,
    age: Number,
    balance: Number
});

export const User = mongoose.model('User', UserSchema);