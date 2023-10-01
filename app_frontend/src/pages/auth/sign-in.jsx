import { Link } from "react-router-dom";
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
import { useState } from "react";

export function SignIn() {
  const [ghUsername, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <img
        src="https://images.unsplash.com/photo-1497294815431-9365093b7331?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80"
        className="absolute inset-0 z-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 z-0 h-full w-full bg-black/50" />
      <div className="container mx-auto p-4">
        <Card className="absolute top-2/4 left-2/4 w-full max-w-[24rem] -translate-y-2/4 -translate-x-2/4">
          <CardHeader
            variant="gradient"
            color="blue"
            className="mb-4 grid h-28 place-items-center"
          >
            <Typography variant="h3" color="white">
              Sign In
            </Typography>
          </CardHeader>
          <CardBody className="flex flex-col gap-4">
            <Input
              type="text"
              label="Username"
              size="lg"
              value={ghUsername}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Input
              type="password"
              label="Password"
              size="lg"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="-ml-2.5">
              <Checkbox label="Remember Me" />
            </div>
          </CardBody>
          <CardFooter className="pt-0">
            <Button
              variant="gradient"
              fullWidth
              onClick={async () => {
                console.log("click");
                fetch(
                  "http://localhost:3000/api/profiles/get-one/" + ghUsername
                )
                  // Converting received data to JSON
                  .then((response) => response.json())
                  .then((json) => {
                    console.log(json);
                    let data = json.profile[0];

                    localStorage.setItem("name", JSON.stringify(data.name));
                    localStorage.setItem("email", JSON.stringify(data.email));
                    localStorage.setItem(
                      "password",
                      JSON.stringify(data.password)
                    );
                    localStorage.setItem(
                      "experience",
                      JSON.stringify(data.experience)
                    );
                    localStorage.setItem("story", JSON.stringify(data.story));
                    localStorage.setItem(
                      "ghUsername",
                      JSON.stringify(data.ghUsername)
                    );
                    localStorage.setItem(
                      "photoURL",
                      JSON.stringify(data.photoURL)
                    );

                    alert(
                      json.profile[0].name + ", You're signed in successfully!"
                    );
                  });
              }}
            >
              Sign In
            </Button>
            <Typography variant="small" className="mt-6 flex justify-center">
              Don't have an account?
              <Link to="/auth/sign-up">
                <Typography
                  as="span"
                  variant="small"
                  color="blue"
                  className="ml-1 font-bold"
                >
                  Sign up
                </Typography>
              </Link>
            </Typography>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}

export default SignIn;
