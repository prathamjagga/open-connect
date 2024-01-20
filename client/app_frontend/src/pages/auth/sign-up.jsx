import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";

export function SignUp() {
  const [name, setName] = useState(" ");
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState(" ");
  const [experience, setExp] = useState(" ");
  const [story, setStory] = useState(" ");
  const [ghUsername, setGH] = useState(" ");
  const [photoUrl, setURL] = useState(" ");

  const navigate = useNavigate();
  return (
    <>
      <img
        src="https://images.unsplash.com/photo-1497294815431-9365093b7331?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80"
        className="absolute inset-0 z-0 h-full w-full object-cover"
      />
      <div className="h-10/12 absolute inset-0 z-0 w-full bg-black/50" />
      <div className="container mx-auto p-4">
        <Card className="absolute top-2/4 left-2/4 w-full max-w-[24rem] -translate-y-2/4 -translate-x-2/4">
          <CardBody className="mt-20 flex flex-col gap-4">
            <Input
              value={name}
              label="Name"
              size="lg"
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              value={email}
              type="email"
              label="Email"
              size="lg"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              value={password}
              type="password"
              label="Password"
              size="lg"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Input
              value={experience}
              type="text"
              label="Your Development Experience 💻"
              size="lg"
              onChange={(e) => setExp(e.target.value)}
            />
            <Input
              value={story}
              type="text"
              label="Your Open Source story 🤔"
              size="lg"
              onChange={(e) => setStory(e.target.value)}
            />
            <Input
              value={ghUsername}
              type="text"
              label="Your Github Username 📑"
              size="lg"
              onChange={(e) => setGH(e.target.value)}
            />
            <Input
              value={photoUrl}
              type="text"
              label="URL for your profile picture 📷"
              size="lg"
              onChange={(e) => setURL(e.target.value)}
            />

            <div className="-ml-2.5">
              <Checkbox label="I agree the Terms and Conditions" />
            </div>
          </CardBody>
          <CardFooter className="pt-0">
            <Button
              variant="gradient"
              fullWidth
              onClick={async (e) => {
                e.preventDefault();
                var data = {
                  name,
                  email,
                  password,
                  experience,
                  ghUsername,
                  story,
                  photoUrl,
                };

                if (
                  data.name === "" ||
                  data.email === "" ||
                  data.password === "" ||
                  data.experience === "" ||
                  data.story === "" ||
                  data.ghUsername === "" ||
                  data.photoUrl === ""
                ) {
                  alert("Please enter the required details");
                } else {
                  var port = "https://naih-frontend-production.up.railway.app";
                  const response = await fetch(
                    `${port}/authenticate/register`,
                    {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/json",
                      },
                      body: JSON.stringify({
                        name: name,
                        ghUsername: ghUsername,
                        password: password,
                        email: email,
                        experience: experience,
                        story: story,
                        photoURL: photoUrl,
                      }),
                    }
                  );

                  const json = await response.json();
                  // console.log(json)

                  alert(response.status);
                  if (Number(response.status) == 200) {
                    alert(
                      `Great ${credentials.name}, You Register successfully`
                    );
                    localStorage.setItem("name", JSON.stringify(data.name));
                    localStorage.setItem("email", JSON.stringify(data.email));
                    localStorage.setItem(
                      "password",
                      JSON.stringify(data.password)
                    );
                    localStorage.setItem(
                      "DevExp",
                      JSON.stringify(data.experience)
                    );
                    localStorage.setItem("story", JSON.stringify(data.story));
                    localStorage.setItem(
                      "ghUsername",
                      JSON.stringify(data.ghUsername)
                    );
                    localStorage.setItem(
                      "photoUrl",
                      JSON.stringify(data.photoUrl)
                    );

                    navigate("/auth/sign-in");
                  } else {
                    if (response.status === 500) {
                      alert("Please fill the required details.");
                    } else {
                      alert(json.msg);
                    }
                  }
                }
              }}
            >
              Sign Up
            </Button>
            <Typography variant="small" className="mt-6 flex justify-center">
              Already have an account?
              <Link to="/auth/sign-in">
                <Typography
                  as="span"
                  variant="small"
                  color="blue"
                  className="ml-1 font-bold"
                >
                  Sign in
                </Typography>
              </Link>
            </Typography>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}

export default SignUp;
