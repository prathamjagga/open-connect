import React from 'react'
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
  Alert
} from "@material-tailwind/react";

import { ProfileInfoCard, MessageCard } from "@/widgets/cards";
  import { platformSettingsData, conversationsData, projectsData } from "@/data";
  
export default function Projects() {
  var name = JSON.parse(localStorage.getItem("ghUsername"));
  const fetchTheData = async(e)=>{
   alert("hujhj")
   var username = await JSON.parse(localStorage.getItem("ghUsername"));
  
// Fetch user information
   fetch(`https://api.github.com/users/${username}`)
    .then(response => response.json())
    .then(userData => {
      
        console.log("User Data:", userData);

        // Fetch user's repositories
        fetch(`https://api.github.com/users/${username}/repos`)
            .then(response => response.json())
            .then(reposData => {
                console.log("Repositories Data:", reposData);

                // Now you can use userData and reposData as needed in your application
            })
            .catch(error => console.error("Error fetching repositories:", error));
    })
    .catch(error => console.error("Error fetching user data:", error));


  }

  
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
                  {name==""?"Please log in":name}
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
                  Name: localStorage.getItem("ghUsername")
                    ? JSON.parse(localStorage.getItem("ghUsername"))
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

          <div>
            
          </div>
        </Card>




        <Card className="mx-3 mt-16 mb-6 lg:mx-4">
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
                  {name==""?"Please log in":name}
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
            
            


            <div class="bg-white p-4 shadow-md rounded-md mb-4">
    
    <div class="flex items-center mb-4">
        {/* <img class="w-10 h-10 rounded-full mr-3" src="{authorProfilePicture}" alt="Author Profile Picture"/> */}
        <div>
            <h4 class="font-bold">{JSON.parse(localStorage.getItem("name"))}</h4>
            <p class="text-gray-500">Computer Science and Engineering </p>
        </div>
    </div>

   
    <p class="mb-4">Project READYME.MD</p>

   <div class="flex items-center">
        <div class="flex items-center mr-4">
            <div class="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <p class="text-white">3</p>
            </div>
            <p class="ml-2">Issues</p>
        </div>
         <div class="flex items-center">
            <div class="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                 <p class="text-white">5</p>
            </div>
            <p class="ml-2">Other</p>
        </div>
    </div>

    <button style={{backgroundColor:"pink"}} onClick = {(e)=>{fetchTheData(e)}}> Fetch the Data</button>
</div>

           
          </CardBody>
        </Card>

        

    </>
  )
}
