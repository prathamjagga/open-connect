import React, { useState, useEffect } from "react";

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

import { Alert } from "@material-tailwind/react";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import AddPostDialog from "@/widgets/PostDialog";
import CarouselWithContent from "@/widgets/PostsCarousel";

export function Profile() {
  // code for open add post dialog box
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openPostDialog = () => {
    setIsDialogOpen(true);
  };

  const closePostDialog = () => {
    setIsDialogOpen(false);
  };

  // students list to be fetched here
  const studentsList = [
    {
      heading: "Pratham Jagga",
      link: "https://profile-link.com/",
    },
    {
      heading: "Aditya Jangra",
      link: "https://github.com/microsoft/autogen",
    },
    {
      heading: "Vanshaj Gupta",
      link: "https://github.com/airbnb/javascript",
    },
    {
      heading: "Ayush Sahni",
      link: "https://github.com/microsoft/PowerToys",
    },
  ];

  var name = "";

  const [repos, setRepos] = useState([{ email: "", name: "" }]);
  useEffect(() => {
    fetchTheData();
  }, []);

  const [data, setdata] = useState({
    email: "",
    name: "",
    experience: "",
    story: "",
    photoURL: "",
  });

  const fetchTheData = async () => {
    alert("Fetching data...");

    try {
      const port = "https://naih-frontend-production.up.railway.app";
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
      console.log(json);

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
      name += userData.name;

      // Fetch user's repositories
      const reposResponse = await fetch(
        `https://api.github.com/users/${username}/repos`
      );
      const reposData = await reposResponse.json();
      console.log("Repositories Data:", reposData);

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
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  //extra code for students list
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

  return (
    <>
      <div className="relative mt-8 h-72 w-full overflow-hidden rounded-xl bg-[url(https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover	bg-center">
        <div className="absolute inset-0 h-full w-full bg-blue-500/50" />
      </div>
      <Card className="mx-3 -mt-16 mb-6 lg:mx-4">
        <CardBody className="p-4">
          <div className="mb-10 flex items-center justify-between gap-6">
            <div className="flex items-center gap-6">
              <Avatar
                src={
                  "https://plus.unsplash.com/premium_photo-1677553955494-6730fb03d797?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dGVhbXxlbnwwfHwwfHx8MA%3D%3D"
                }
                alt="bruce-mars"
                size="xl"
                className="rounded-lg shadow-lg shadow-blue-gray-500/40"
              />
              <div>
                <Typography variant="h5" color="blue-gray" className="mb-1">
                  {JSON.parse(localStorage.getItem("ghUsername"))}{" "}
                  {/* {name === "" && "Please log in."}
                  {localStorage.getItem("name") &&
                    JSON.parse(localStorage.getItem("name"))} */}
                </Typography>
                <Typography
                  variant="small"
                  className="font-normal text-blue-gray-600"
                >
                  Community
                </Typography>
              </div>
              <div>
                {/* <button>Add New Post</button> */}
                <Button
                  variant="small"
                  className="float-right font-normal text-blue-gray-600"
                  onClick={openPostDialog}
                >
                  Add New Post
                </Button>
              </div>
            </div>
            <div className="w-96"></div>
          </div>
          <div className="gird-cols-1 mb-12 grid gap-12 px-4 lg:grid-cols-2 xl:grid-cols-3">
            {/* <div>
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
            </div> */}
            <ProfileInfoCard
              title="Description 💬📝"
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
                members: "10",
              }}
            />
            <div>
              <ProfileInfoCard
                title="Tech Expertise 👨‍💻⚙"
                description={data.experience === "" ? "" : data.experience}
              />
            </div>
            <div>
              <ProfileInfoCard
                title="Values ✨"
                description={data.experience === "" ? "" : data.experience}
              />
            </div>
          </div>
        </CardBody>
      </Card>
      <Card className="w-100 mb-8">
        {/* <h3>Top Posts</h3>
         */}
        <Typography
          variant="h3"
          color="blue-gray"
          className="w-80 pt-6 text-center"
        >
          {" "}
          Top Posts{" "}
        </Typography>
        <CardBody>
          <CarouselWithContent
            images={[
              {
                src: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                alt: "",
                text: "text",
              },
              {
                src: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                alt: "",
                text: "text2",
              },
            ]}
          />
        </CardBody>
      </Card>

      <Card>
        <CardHeader
          color="transparent"
          floated={false}
          shadow={false}
          className="m-0 p-4"
        >
          <Typography variant="h5" color="blue-gray">
            Members / Students
          </Typography>
        </CardHeader>
        <CardBody className="flex flex-col gap-4 p-4">
          {studentsList.map((color) => (
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
        </CardBody>
      </Card>
      <AddPostDialog isOpen={isDialogOpen} onClose={closePostDialog} />
    </>
  );
}

export default Profile;
