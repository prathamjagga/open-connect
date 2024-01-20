const express = require("express");
const router = express.Router();
const userController = require("../controllers/User");

router.post("/login", userController.login);
router.post("/getuser", userController.getuser);
router.post("/register", userController.register);
router.post("/auto-fix", async (req, res) => {
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
		const scriptOutput = execSync(`sh`, {
			input: script,
			encoding: "utf-8",
		});
        console.log(scriptOutput)
		res.status(200).json({ success: true, output: scriptOutput });
	} catch (err) {
		res.status(500).json({ success: false, message: err });
	}
});


module.exports = router;
