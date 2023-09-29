const { PORT, MONGODB_URI } = require("./config/config");
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan("dev"));

mongoose
	.connect(MONGODB_URI, {})
	.then(() => {
		console.log("Connected to MongoDB");
		// Start the server
		app.listen(PORT, () => {
			console.log(`Server started on port ${PORT}`);
		});
	})
	.catch((error) => {
		console.error("MongoDB connection error:", error);
	});
