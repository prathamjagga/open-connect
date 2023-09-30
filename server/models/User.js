const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema({
	email: {
		type: String,
		required: true,
		unique: true,
	},
	name: {
		type: String,
		required: true,
	},
	experience: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
	story: {
		type: String,
		required: true,
	},
	photoURL: {
		type: String,
		required: true,
	},
	ghUsername: {
		type: String,
		required: true,
	},
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
