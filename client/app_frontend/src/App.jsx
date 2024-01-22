import { Routes, Route, Navigate } from "react-router-dom";
import { Dashboard, Auth } from "@/layouts";
import Members from "./pages/dashboard/Members";
import Project from "./pages/dashboard/Project";
import IssueForum from "./pages/issueForum";
function App() {
  return (
    <Routes>
      <Route path="/dashboard/*" element={<Dashboard />} />
      <Route path="/auth/*" element={<Auth />} />
      <Route path="/issue-forum/:number" element={<IssueForum />} />
      <Route path="/dashbaord/member" element={<Members />} />
      <Route path="/dashbaord/project" element={<Project />} />

      <Route path="*" element={<Navigate to="/dashboard/profile" replace />} />
    </Routes>
  );
}

export default App;
