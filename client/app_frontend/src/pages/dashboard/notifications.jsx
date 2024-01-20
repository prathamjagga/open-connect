import React from "react";
import {
  Typography,
  Alert,
  Card,
  CardHeader,
  CardBody,
} from "@material-tailwind/react";
import { InformationCircleIcon } from "@heroicons/react/24/outline";

export function Notifications() {
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
  const repos = [
    {
      heading: "dreamgaussian / dreamgaussian",
      link: "https://github.com/dreamgaussian/dreamgaussian",
    },
    {
      heading: "microsoft / autogen",
      link: "https://github.com/microsoft/autogen",
    },
    {
      heading: "airbnb / javascript",
      link: "https://github.com/airbnb/javascript",
    },
    {
      heading: "microsoft / PowerToys",
      link: "https://github.com/microsoft/PowerToys",
    },
    {
      heading: "casey / runestone",
      link: "https://github.com/casey/runestone",
    },
  ];
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

  return (
    <div className="mx-auto my-20 flex max-w-screen-lg flex-col gap-8">
      <Card>
        <CardHeader
          color="transparent"
          floated={false}
          shadow={false}
          className="m-0 p-4"
        >
          <Typography variant="h5" color="blue-gray">
            Community Members / Students
          </Typography>
        </CardHeader>
        <CardBody className="flex flex-col gap-4 p-4">
          {repos.map((color) => (
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
      <Card>
        <CardHeader
          color="transparent"
          floated={false}
          shadow={false}
          className="m-0 p-4"
        >
          <Typography variant="h5" color="blue-gray">
            Trending Posts on Dev.to
          </Typography>
        </CardHeader>
        <CardBody className="flex flex-col gap-4 p-4">
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
        </CardBody>
      </Card>
    </div>
  );
}

export default Notifications;
