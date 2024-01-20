import {
  HomeIcon,
  UserCircleIcon,
  TableCellsIcon,
  BellIcon,
  ArrowRightOnRectangleIcon,
  UserPlusIcon,
  ComputerDesktopIcon,
  SunIcon,
  StarIcon,
} from "@heroicons/react/24/solid";
import { Home, Profile, Tables, Notifications } from "@/pages/dashboard";
import Matching from "@/pages/Matching";
import Analyse from "@/pages/Analyse";
import { SignIn, SignUp } from "@/pages/auth";
import Intro from "@/Intro";
import ProjectView from "./pages/ProjectView";
import ImageGrid from "./pages/GithubEcosystem";
import AutoFix from "./pages/AutoFix";
import IssueForum from "./pages/issueForum";
import Members from "./pages/dashboard/Members";
import MonitoringDashboard from "./pages/Monitor";

const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes = [
  {
    layout: "dashboard",

    pages: [
      {
        icon: <UserCircleIcon {...icon} />,
        name: "Community Dashboard",
        path: "/community-profile",
        element: <Profile />,
      },
      {
        icon: <UserCircleIcon {...icon} />,

        name: "Your Hacker Profile",
        path: "/member-profile",
        element: <Members />,
      },
      {
        icon: <SunIcon {...icon} />,

        name: "Github Ecosystem Tools",
        path: "/github-ecosystem",
        element: <ImageGrid />,
      },
      {
        icon: <ComputerDesktopIcon {...icon} />,

        name: "Your Featured Project",
        path: "/project",
        element: <ProjectView />,
      },

      {
        icon: <SunIcon {...icon} />,
        name: "community connect",
        path: "/people",
        element: <Home />,
      },

      {
        icon: <BellIcon {...icon} />,
        name: "Trending in Open Source",
        path: "/trending",
        element: <Notifications />,
      },
      {
        icon: <ComputerDesktopIcon {...icon} />,
        name: "Find Ideal Mentors with Taipy and AI ✨🤖",
        path: "/matching",
        element: <Matching />,
      },
      {
        icon: <StarIcon {...icon} />,
        name: "Your Github Stats",
        path: "/analyse",
        element: <Analyse />,
      },

      {
        name: "AutoFix",
        path: "/autofix",
        element: <AutoFix />,
      },
      {
        name: "Monitor your Application Using Orkes Conductor 🚀☁️",
        path: "/monitor",
        element: <MonitoringDashboard />,
      },
    ],
  },
  {
    title: "Profile",
    layout: "auth",
    pages: [
      {
        icon: <ArrowRightOnRectangleIcon {...icon} />,
        name: "sign in",
        path: "/sign-in",
        element: <SignIn />,
      },
      {
        icon: <UserPlusIcon {...icon} />,
        name: "sign up",
        path: "/sign-up",
        element: <SignUp />,
      },
    ],
  },
];

export default routes;
