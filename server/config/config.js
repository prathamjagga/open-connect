module.exports = {
	PORT: process.env.PORT || 3000,
	MONGODB_URI:
		process.env.MONGODB_URI ||
		"mongodb+srv://pratham:pratham@cluster0.6b0ku.mongodb.net/?retryWrites=true&w=majority",
};
