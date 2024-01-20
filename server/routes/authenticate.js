const express = require("express");
const router = express.Router();
const userController = require("../controllers/User");

router.post("/login", userController.login);
router.post("/getuser", userController.getuser);
router.post("/register", userController.register);

let failed = []


router.post("/auto-fix", async (req, res) => {
	console.log(req.body);
	try {
        if(Math.random()<0.5){
            // failed.push(req.body)
            return res.status(200).json({success: true})
        }
        failed.push(req.body)
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

router.post("/retry-failed-auto-fixes", (req, res)=>{
    let currFailed = failed;
    failed = []
    async function retryFailed(cf){
        return true;
    }
    retryFailed(currFailed)
    res.status(200).json({success: true})
})


module.exports = router;
