const User = require("../models/User");

const addProfile = async (req, res) => {
	const body = req.body;
	const { name, email, experience, password, story, photoURL, ghUsername } =
		body;
	new_profile = await new User({
		name,
		email,
		experience,
		password,
		story,
		photoURL,
		ghUsername,
	});
	new_profile.save();
	return res.json({ success: true });
};

const getProfile = async (req, res) => {
	const ghUsername = req.params.ghUsername;
	const reqProfile = await User.find({ ghUsername });
	return res.json({ success: true, profile: reqProfile });
};

const getAllProfiles = async (req, res) => {
	const allProfiles = await User.find();
	return res.json({ success: true, allProfiles });
};
module.exports = {
	getProfile,
	addProfile,
	getAllProfiles,
};
