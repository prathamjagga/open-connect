const User = require("../models/User");


const register = async(req, res)=>{
    try {
        

        // check whether the user email already exist or not 

        let user = await User.findOne({ email: req.body.ghUsername });
        if (user) {
            // checking the user already exist or not 
            return res.status(400).json({msg: "Sorry a user with the same username already exist" })
        }

        


        var salt = bcrypt.genSaltSync(10);
        secpass = bcrypt.hashSync(req.body.password, salt);
        // adding salt to the password to make it more strong

        // creating a new user 
        user = await User.create({
            name: req.body.name,
            ghUsername: req.body.ghUsername,
            password: secpass,
			email:req.body.email, 
			experience:req.body.experience,
			story:req.body.story,
			photoURL:req.body.photoURL

        })

        user.save();
        
        res.status(200).json("User registered successfully");
    } catch (error) {
        
        // if there is some error in the code above 500 status code will be showed
        console.error(error.message );
        res.status(500).json("Internal Server Error");
    }

}

const login  = async(req, res)=>{
  
    try {

        const { ghUsername, password } = req.body;
        let user = await User.findOne({ ghUsername })
        // find the user with email provided by the user

        if (!user) {
            // user does not exixt with this email so send the status and msg
            
            return res.status(400).json({ msg: "Invalid credentials." })
        }

        const passwordCompare = await bcrypt.compare(password, user.password)
        if (!passwordCompare) {
           
            return res.status(400).json({ msg: "Invalid credentials." })
        }
        

        const data = {
            user: {
                // fetch the user id
                id: user.id
            }
        }
        const authToken = jwt.sign(data, JWT_SECRET);
        // authtoken is provided to the user to authenticiate him/herself
        // done with the help of jsonwebtoken package
       
        res.status(200).json({msg:"User logged successfully", "authToken":authToken });

    } catch (error) {

        // if there is some error in the code above 500 status code will be showed
        console.error(error.message);
        res.status(500).json("Internal Server Error ");

    }


}

const getuser = async(req, res)=>{
    try {
        user = req.user.id;
        const user = await User.findById(user).select("-password")
        return res.send(user);
    } catch (error) {

        // if there is some error in the code above 500 status code will be showed
        console.error(error.message);
        res.status(500).send("Internal Server Error ");

    }
}

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
	register,
	login,
	getuser
};
