import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProjectView = ({}) => {
  const navigate = useNavigate();
  const [projectIssues, setProjectIssues] = useState(["a", "b"]);
  const [projectDescription, setProjectDescription] = useState(
    "desfdwjfwefew dpofuwepufpoweufpuwe"
  );
  const [stars, setStars] = useState(32);
  const [forks, setForks] = useState(32);
  const [issues, setIssues] = useState(["a", "b"]);

  useEffect(() => {
    async function getGitHubIssues(owner, repo) {
      const apiUrl = `https://api.github.com/repos/${owner}/${repo}/issues`;

      try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
          throw new Error(
            `Failed to fetch issues: ${response.status} ${response.statusText}`
          );
        }

        const x = await response.json();

        setProjectIssues(x);

        return issues;
      } catch (error) {
        console.error("Error:", error.message);
        throw error;
      }
    }

    const owner = "Netflix";
    const repo = "conductor";

    getGitHubIssues(owner, repo);

    async function getDesc(owner, repo) {
      const res = await fetch(`https://api.github.com/repos/${owner}/${repo}`);

      const data = await res.json();

      setProjectDescription(data.description);
      setForks(data.forks);
      setStars(data.stargazers_count);
    }

    getDesc(owner, repo);
  }, []);

  return (
    <div className="mx-auto mt-8 max-w-4xl rounded-md bg-white p-6 shadow-md">
      <h1 className="mb-4 text-2xl font-bold">Project View - Conductor</h1>

      <button
        className="rounded-md bg-blue-500 py-2 px-4 text-white hover:bg-blue-600 focus:outline-none"
        onClick={() => alert("Auto-Fixer does nothing on click")}
      >
        One Click Bug Fix (Auto - Fixer)
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
          Issues: {projectIssues.length}
        </span>
      </div>

      <div className="mb-4">
        <h2 className="mb-2 text-lg font-semibold">Project Issues</h2>
        <ul className="list-disc pl-4">
          {projectIssues.map((issue, index) => (
            <li key={index} className="text-gray-700">
              <a
                style={{ color: "blue", textDecoration: "underline" }}
                href={issue.html_url}
              >
                {issue.title}
              </a>
              <br />
              <button
                className="btn  "
                onClick={() => navigate("/issue-forum/" + issue.number)}
              >
                {" "}
                Go to Discussion ✅ (<bold>PRO</bold>)
              </button>
              <br />
              <button
                className="btn"
                onClick={() => navigate("/dashboard/autofix")}
              >
                {" "}
                Fix this issue using Auto-Fixer ✅ (<bold>PRO</bold>)
              </button>
              <br />
              <br />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectView;
