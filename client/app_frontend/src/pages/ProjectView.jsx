import React, { useState } from "react";

const ProjectView = ({}) => {
  const [projectIssues, setProjectIssues] = useState(["a", "b"]);
  const [projectDescription, setProjectDescription] = useState(
    "desfdwjfwefew dpofuwepufpoweufpuwe"
  );
  const [stars, setStars] = useState(32);
  const [forks, setForks] = useState(32);
  const [issues, setIssues] = useState(["a", "b"]);
  return (
    <div className="mx-auto mt-8 max-w-xl rounded-md bg-white p-6 shadow-md">
      <h1 className="mb-4 text-2xl font-bold">Project View</h1>

      <button
        className="rounded-md bg-blue-500 py-2 px-4 text-white hover:bg-blue-600 focus:outline-none"
        onClick={() => alert("Auto-Fixer does nothing on click")}
      >
        Auto-Fixer
      </button>

      <div className="mb-4">
        <h2 className="mb-2 text-lg font-semibold">Project Description</h2>
        <p className="text-gray-700">{projectDescription}</p>
      </div>

      <div className="mb-4 flex items-center">
        <span className="mr-2 rounded-md bg-yellow-500 py-1 px-2 text-white">
          Stars: {stars}
        </span>
        <span className="mr-2 rounded-md bg-green-500 py-1 px-2 text-white">
          Forks: {forks}
        </span>
        <span className="rounded-md bg-blue-500 py-1 px-2 text-white">
          Issues: {issues.length}
        </span>
      </div>

      <div className="mb-4">
        <h2 className="mb-2 text-lg font-semibold">Project Issues</h2>
        <ul className="list-disc pl-4">
          {projectIssues.map((issue, index) => (
            <li key={index} className="text-gray-700">
              {issue}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectView;
