import React, { useState } from "react";
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
import { useNavigate } from "react-router-dom";
export function SignIn() {
  const navigate = useNavigate();
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
                if (ghUsername === "" || password === "") {
                  alert("Please enter the required details");
                } else {
                  console.log("click");
                  const port =
                    "https://naih-frontend-production.up.railway.app";
                  const response = await fetch(`${port}/authenticate/login`, {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                      ghUsername: ghUsername,
                      password: password,
                    }),
                  });

                  const json = await response.json();
                  console.log(json);

                  alert(response.status);
                  if (response.status === 500 || response.status === 400) {
                    if (response.status === 500) {
                      alert("Please fill the required details.");
                    } else {
                      alert(json.msg);
                    }
                  } else {
                    localStorage.setItem("token", "toke123");
                    alert(`Great You Logged successfully`);
                    localStorage.setItem(
                      "ghUsername",
                      JSON.stringify(ghUsername)
                    );
                    navigate("/dashboard/member-profile");
                  }
                }
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
                  Sign In
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
