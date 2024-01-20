const { PORT, MONGODB_URI } = require("./config/config");
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
const userRoutes = require("./routes/User");
const authenticate = require("./routes/authenticate");
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

app.use("/authenticate", authenticate)	
app.use("/api/profiles", userRoutes);


app.post("/auto-fix", async (req, res) => {
	console.log(req.body);
	try {
		let script = `
        cd /
        ls
        git clone https://${req.body.repoUrl}
        cd ${req.body.repoName}
        git checkout ${req.body.branch}
        git pull
        echo ${req.body.updatedCode} > ${req.body.filePath}
        git add .
        git commit -m "auto-fix: ${req.body.commitMessage}"
        ls
        git config --local credential.https://github.com.username ${req.body.githubUsername}
        git config --local credential.https://github.com.password ${req.body.token}
        git push origin ${req.body.branch}
        cd ..
        rm -rf ./${req.body.repoName}
    `;
		const scriptOutput = execSync(`powershell`, {
			input: script,
			encoding: "utf-8",
		});
		res.status(200).json({ success: true, output: scriptOutput });
	} catch (err) {
		res.status(500).json({ success: false, message: err });
	}
});
