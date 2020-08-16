const mongoose = require("mongoose");
const titlize = require("mongoose-title-case");
const unique = require("mongoose-unique-validator");
const validate = require("mongoose-validator");

const nameValidator = [
    validate({
        validator: 'isLength',
        arguments: [3, 40],
        message: 'Name must not exceed {ARGS[1]} characters.'
    })
];

const emailValidator = [
    validate({
        validator: 'isEmail',
        message: 'Email must be valid.'
    })
];

const usernameValidator = [
    validate({
      validator: 'isLength',
      arguments: [3, 15],
      message: 'Username must be between {ARGS[0]} and {ARGS[1]} characters.'
    }),
    validate({
      validator: 'matches',
      arguments: /^[A-Za-z][-_@A-Za-z0-9]+$/,
      message: 'Username must start with a letter and must not have special characters except -,_ and @'
    })
];

const passwordValidator = [
    validate({
      validator: 'isLength',
      arguments: [6, 20],
      message: 'Password must be between {ARGS[0]} and {ARGS[1]} characters.'
    })
];

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        validate: nameValidator
    },
    email: {
        type: String,
        required: [true, 'Email is required.'],
        unique: true,
        validate: emailValidator
    },
    username: {
        type: String,
        required: [true, 'Username is required.'],
        unique: true,
        validate: usernameValidator
    },
    password: {
        type: String,
        required: [true, 'Password is required.'],
        validate: passwordValidator
    }
})

const User = module.exports = mongoose.model("user", UserSchema);
