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
import Members from "./pages/dashboard/Members"

const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes = [
  {
    layout: "dashboard",

    pages: [
      {
        icon: <UserCircleIcon {...icon} />,
        name: "Community Profile",
        path: "/community-profile",
        element: <Profile />,
      },
      {
        name: "Project",
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
        name: "Trending in Open Source ✨",
        path: "/trending",
        element: <Notifications />,
      },
      {
        icon: <ComputerDesktopIcon {...icon} />,
        name: "AI Mentor Matching",
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
        name: "Github Ecosystem Tools",
        path: "/github-ecosystem",
        element: <ImageGrid />,
      },
      {
        name: "AutoFix",
        path: "/autofix",
        element: <AutoFix />,
      },
      {
        name: "Hacker Profile",
        path: "/member-profile",
        element: <Members/>

      }
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