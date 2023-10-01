const User = require("../models/User");

const addProfile = async (req, res) => {
	const body = req.body;
	var { name, email, experience, password, story, photoURL, ghUsername } = body;
	if (!photoURL)
		photoURL =
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV8EqXHAtdHJBEGKSMhlxIU7owt9od4PqSqe4r3Kg&s";
	var new_profile = new User({
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
