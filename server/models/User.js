const {model, Schema} = require('mongoose')
const { hash } = require('bcryptjs')

const userSchema = new Schema({
    username: String,
    password: String,
    email: String,
    createdAt:String
})

module.exports = model('User', userSchema);
