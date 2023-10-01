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

export function Profile() {
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
                  {!localStorage.getItem("name") && "Please log in."}
                  {localStorage.getItem("name") &&
                    JSON.parse(localStorage.getItem("name"))}
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
              description={
                localStorage.getItem("story")
                  ? JSON.parse(localStorage.getItem("story"))
                  : "Please log in."
              }
              details={{
                Name: localStorage.getItem("name")
                  ? JSON.parse(localStorage.getItem("name"))
                  : "Please log in.",
                email: localStorage.getItem("email")
                  ? JSON.parse(localStorage.getItem("email"))
                  : "Please log in.",
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
                description={
                  localStorage.getItem("experience")
                    ? JSON.parse(localStorage.getItem("experience"))
                    : "Please log in."
                }
              />
            </div>
          </div>
        </CardBody>
      </Card>
    </>
  );
}

export default Profile;
