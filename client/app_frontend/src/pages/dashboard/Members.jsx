import React, { useEffect, useState } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Avatar,
  Typography,
  Tabs,
  TabsHeader,
  Tab,
  Switch,
  Tooltip,
  Button,
  Alert,
} from "@material-tailwind/react";

import {
  HomeIcon,
  ChatBubbleLeftEllipsisIcon,
  Cog6ToothIcon,
  PencilIcon,
} from "@heroicons/react/24/solid";

import { Link } from "react-router-dom";
import { ProfileInfoCard, MessageCard } from "@/widgets/cards";
import { platformSettingsData, conversationsData, projectsData } from "@/data";

export function Profile() {
  const [showAlerts, setShowAlerts] = React.useState({
    blue: true,
    green: true,
    orange: true,
    red: true,
  });
  const [showAlertsWithIcon, setShowAlertsWithIcon] = React.useState({
    blue: true,
    green: true,
    orange: true,
    red: true,
  });

  const [data, setdata] = useState({
    email: "",
    name: "",
    experience: "",
    story: "",
    photoURL: "",
  });

  const [repos, setRepos] = useState([]);
  useEffect(() => {
    fetchTheData();
  }, []);

  var name = JSON.parse(localStorage.getItem("ghUsername"));
  const fetchTheData = async () => {
    alert("Fetching data...");

    try {
      const port = "http://localhost:3000";
      const response = await fetch(`${port}/authenticate/getuser`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ghUsername: JSON.parse(localStorage.getItem("ghUsername")),
        }),
      });

      const json = await response.json();
      // console.log(json)

      alert(response.status);
      if (response.status === 500 || response.status === 400) {
        alert("Can not fetch data");
      } else {
        console.log("I found it ");
        data.email = json.email;
        data.experience = json.experience;
        data.photoURL = json.photoURL;
        data.story = json.story;
        data.name = data.name;
      }

      var username = await JSON.parse(localStorage.getItem("ghUsername"));

      // Fetch user information
      const userResponse = await fetch(
        `https://api.github.com/users/${username}`
      );
      const userData = await userResponse.json();
      console.log("User Data:", userData);

      // Fetch user's repositories
      const reposResponse = await fetch(
        `https://api.github.com/users/${username}/repos`
      );
      const reposData = await reposResponse.json();
      console.log("Repositories Data:", reposData);

      // Check if reposData is an array before using filter
      if (Array.isArray(reposData)) {
        // Filter repositories to include only those with unique ids
        const uniqueRepos = reposData.filter(
          (repo) => !repos.some((existingRepo) => existingRepo.id === repo.id)
        );

        // Map unique repositories to the desired format
        const repoObjects = uniqueRepos.map((repo) => ({
          id: repo.id, // Make sure to include the unique id
          heading: repo.full_name,
          link: repo.html_url,
        }));

        // Update the state using the functional form of setRepos
        setRepos((prevRepos) => [...prevRepos, ...repoObjects]);

        console.log(typeof repos);
        // Now you can use userData and repoObjects as needed in your application
      } else {
        console.error("Error fetching repositories: reposData is not an array");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const posts = [
    {
      heading: "🚀 10 Github repositories to achieve Javascript mastery 🧙‍♂️🪄✨",
      link: "https://dev.to/novu/10-github-repositories-to-achieve-javascript-mastery-50hk",
    },
    {
      heading: "Handling state between multiple processes with elixir",
      link: "https://dev.to/cherryramatis/handling-state-between-multiple-instances-with-elixir-4jm1",
    },
    {
      heading:
        "Contributing to Tech Communities: How Open-Source can land you a job and get you out of the Skill Paradox 💼",
      link: "https://dev.to/wasp/contributing-to-tech-communities-how-open-source-can-land-you-a-job-and-get-you-out-of-the-skill-paradox-4ejh",
    },
    {
      heading: "React Advanced: Decoupling your components in the right way",
      link: "React Advanced: Decoupling your components in the right way",
    },
    {
      heading: "Implementing Signals from Scratch",
      link: "https://dev.to/ratiu5/implementing-signals-from-scratch-3e4c",
    },
  ];

  const communities = [
    {
      heading: "Cancer detection",
      link: "https://github.com/dreamgaussian/dreamgaussian",
    },
    {
      heading: "Regression / Classification",
      link: "https://github.com/microsoft/autogen",
    },
    {
      heading: "Support Vector Machine / Python",
      link: "https://github.com/airbnb/javascript",
    },
    {
      heading: "AI Based Web Dev",
      link: "https://github.com/microsoft/PowerToys",
    },
    {
      heading: "Centralized Nasha Mukti Database / MERN",
      link: "https://github.com/casey/runestone",
    },
  ];

  return (
    <>
      <div className="relative mt-8 h-72 w-full overflow-hidden rounded-xl bg-[url(https://images.unsplash.com/photo-1531512073830-ba890ca4eba2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80)] bg-cover	bg-center">
        <div className="absolute inset-0 h-full w-full bg-blue-500/50" />
      </div>
      <Card className="mx-3 -mt-16 mb-6 lg:mx-4">
        <CardBody className="p-4">
          <div className="mb-10 flex items-center justify-between gap-6">
            <div className="flex items-center gap-6">
              <Avatar
                src={
                  localStorage.getItem("photoURL")
                    ? JSON.parse(localStorage.getItem("photoURL"))
                    : "/img/bruce-mars.jpeg"
                }
                alt="bruce-mars"
                size="xl"
                className="rounded-lg shadow-lg shadow-blue-gray-500/40"
              />
              <div>
                <Typography variant="h5" color="blue-gray" className="mb-1">
                  {localStorage.getItem("ghUsername")
                    ? JSON.parse(localStorage.getItem("ghUsername"))
                    : "Please log in."}
                </Typography>
                <Typography
                  variant="small"
                  className="font-normal text-blue-gray-600"
                >
                  Contributor
                </Typography>
              </div>
            </div>
            <div className="w-96"></div>
          </div>
          <div className="gird-cols-1 mb-12 grid gap-12 px-4 lg:grid-cols-2 xl:grid-cols-3">
            <div>
              <Typography variant="h6" color="blue-gray" className="mb-3">
                Platform Settings
              </Typography>
              <div className="flex flex-col gap-12">
                {platformSettingsData.map(
                  ({ title, options }) =>
                    title != "account" && (
                      <div key={title}>
                        <Typography className="mb-4 block text-xs font-semibold uppercase text-blue-gray-500">
                          {title}
                        </Typography>
                        <div className="flex flex-col gap-6">
                          {options.map(({ checked, label }) => (
                            <Switch
                              key={label}
                              id={label}
                              label={label}
                              defaultChecked={checked}
                              labelProps={{
                                className:
                                  "text-sm font-normal text-blue-gray-500",
                              }}
                            />
                          ))}
                        </div>
                      </div>
                    )
                )}
              </div>
            </div>
            <ProfileInfoCard
              title="My Open Source Story 😅"
              description={data.story === "" ? "" : data.story}
              details={{
                Name: localStorage.getItem("ghUsername")
                  ? JSON.parse(localStorage.getItem("ghUsername"))
                  : "Please log in.",
                email: data.email === "" ? "" : data.email,
                location: "India",
                social: (
                  <div className="flex items-center gap-4">
                    <i className="fa-brands fa-facebook text-blue-700" />
                    <i className="fa-brands fa-twitter text-blue-400" />
                    <i className="fa-brands fa-instagram text-purple-500" />
                  </div>
                ),
              }}
            />
            <div>
              <ProfileInfoCard
                title="My Experience with Tech 👨‍💻⚙"
                description={data.experience === "" ? "" : data.experience}
              />
            </div>
          </div>
        </CardBody>
      </Card>

      {/* Communities followed by the person present  */}

      <div className="mx-auto my-20 flex max-w-screen-lg flex-col gap-8">
        <Card>
          <CardHeader
            color="transparent"
            floated={false}
            shadow={false}
            className="m-0 p-4"
          >
            <Typography variant="h5" color="blue-gray">
              Communities followed:
            </Typography>
          </CardHeader>
          <CardBody className="flex flex-col gap-4 p-4">
            {communities.map((color) => (
              <Alert
                key={color}
                show={showAlerts["grey"]}
                color={"grey"}
                dismissible={false}
              >
                <a href={color.link} target="_blank" className="underline">
                  {color.heading}
                </a>
              </Alert>
            ))}
          </CardBody>
        </Card>
        <Card></Card>
      </div>

      {/* Project Developed */}

      <div className="mx-auto my-20 flex max-w-screen-lg flex-col gap-8">
        <Card>
          <CardHeader
            color="transparent"
            floated={false}
            shadow={false}
            className="m-0 p-4"
          >
            <Typography variant="h5" color="blue-gray">
              Projects Developed:
            </Typography>
          </CardHeader>
          <CardBody className="flex flex-col gap-4 p-4">
            {repos.map((color) => (
              <Alert
                key={color.id}
                show={showAlerts["grey"]}
                color={"grey"}
                dismissible={false}
              >
                <a href={color.link} target="_blank" className="underline">
                  {color.heading}
                </a>
              </Alert>
            ))}
          </CardBody>
        </Card>
        <Card>
          {/* <CardHeader
          color="transparent"
          floated={false}
          shadow={false}
          className="m-0 p-4"
        >
          <Typography variant="h5" color="blue-gray">
            Trending Posts on Dev.to
          </Typography>
        </CardHeader> */}
          {/* <CardBody className="flex flex-col gap-4 p-4">
          {posts.map((color) => (
            <Alert
              key={color}
              show={showAlertsWithIcon["green"]}
              color={"green"}
              dismissible={false}
            >
              <a href={color.link} target="_blank" className="underline">
                {color.heading}
              </a>
            </Alert>
          ))}
        </CardBody> */}
        </Card>
      </div>

      {/* Post created by the user */}

      <div className="mx-auto my-20 flex max-w-screen-lg flex-col gap-8">
        <Card>
          <CardHeader
            color="transparent"
            floated={false}
            shadow={false}
            className="m-0 p-4"
          >
            <Typography variant="h5" color="blue-gray">
              Post Created:
            </Typography>
          </CardHeader>
          <CardBody className="flex flex-col gap-4 p-4">
            {posts.map((color, index) => (
              <Alert
                key={index}
                show={showAlerts["grey"]}
                color={"grey"}
                dismissible={false}
              >
                <a href={color.link} target="_blank" className="underline">
                  {color.heading}
                </a>
              </Alert>
            ))}
          </CardBody>
        </Card>
        <Card>
          {/* <CardHeader
          color="transparent"
          floated={false}
          shadow={false}
          className="m-0 p-4"
        >
          <Typography variant="h5" color="blue-gray">
            Trending Posts on Dev.to
          </Typography>
        </CardHeader> */}
          {/* <CardBody className="flex flex-col gap-4 p-4">
          {posts.map((color) => (
            <Alert
              key={color}
              show={showAlertsWithIcon["green"]}
              color={"green"}
              dismissible={false}
            >
              <a href={color.link} target="_blank" className="underline">
                {color.heading}
              </a>
            </Alert>
          ))}
        </CardBody> */}
        </Card>
      </div>
    </>
  );
}

export default Profile;
