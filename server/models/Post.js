const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const PostSchema = new mongoose.Schema({
	description: {
		type: String,
		required: true,
	},
	photoUrl: {
		type: String,
		required: true,
	},
});

const Post = mongoose.model("Post", PostSchema);

module.exports = Post;
