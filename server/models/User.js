const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const professorSchema = new mongoose.Schema({
	phone: {
		type: String,
		required: true,
		unique: true,
	},
	name: {
		type: String,
		required: true,
	},
	coins: {
		type: Number,
		default: 0,
	},
	otp: {
		type: String,
	},
	otpExpiry: {
		type: Date,
	},
	department: {
		type: String,
		required: true,
	},
});

const Professor = mongoose.model("Professor", professorSchema);

module.exports = Professor;
