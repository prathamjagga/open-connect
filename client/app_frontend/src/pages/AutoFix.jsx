import React, { useState } from "react";

const UpdateCode = () => {
  const [formData, setFormData] = useState({
    filePath: "",
    githubUsername: "",
    token: "",
    updatedCode: "",
    commitMessage: "",
    branch: "",
    repoUrl: "",
    repoName: "",
  });

  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make API call
      const response = await fetch(
        "https://naih-frontend-production.up.railway.app/authenticate/auto-fix",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.status === 200) {
        // Successful API call
        setStatusMessage("Update successful!");
      } else {
        // Handle error cases
        const errorMessage = await response.text();
        setStatusMessage(`Error: ${errorMessage}`);
      }
    } catch (error) {
      console.error("Error:", error.message);
      setStatusMessage("An error occurred while updating the code.");
    }
  };

  return (
    <div className="mx-auto mt-8 max-w-xl">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="mb-4">
          <label
            htmlFor="filePath"
            className="block text-sm font-medium text-gray-600"
          >
            File Path
          </label>
          <input
            type="text"
            id="filePath"
            name="filePath"
            value={formData.filePath}
            onChange={handleChange}
            className="mt-1 w-full rounded-md border p-2"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="githubUsername"
            className="block text-sm font-medium text-gray-600"
          >
            GitHub Username
          </label>
          <input
            type="text"
            id="githubUsername"
            name="githubUsername"
            value={formData.githubUsername}
            onChange={handleChange}
            className="mt-1 w-full rounded-md border p-2"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="token"
            className="block text-sm font-medium text-gray-600"
          >
            Token
          </label>
          <input
            type="text"
            id="token"
            name="token"
            value={formData.token}
            onChange={handleChange}
            className="mt-1 w-full rounded-md border p-2"
          />
        </div>
        {/* ... other input fields ... */}
        <div className="mb-4">
          <label
            htmlFor="commitMessage"
            className="block text-sm font-medium text-gray-600"
          >
            Commit Message
          </label>
          <input
            type="text"
            id="commitMessage"
            name="commitMessage"
            value={formData.commitMessage}
            onChange={handleChange}
            className="mt-1 w-full rounded-md border p-2"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="branch"
            className="block text-sm font-medium text-gray-600"
          >
            Branch
          </label>
          <input
            type="text"
            id="branch"
            name="branch"
            value={formData.branch}
            onChange={handleChange}
            className="mt-1 w-full rounded-md border p-2"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="repoUrl"
            className="block text-sm font-medium text-gray-600"
          >
            Repo URL
          </label>
          <input
            type="text"
            id="repoUrl"
            name="repoUrl"
            value={formData.repoUrl}
            onChange={handleChange}
            className="mt-1 w-full rounded-md border p-2"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="repoName"
            className="block text-sm font-medium text-gray-600"
          >
            Repo Name
          </label>
          <input
            type="text"
            id="repoName"
            name="repoName"
            value={formData.repoName}
            onChange={handleChange}
            className="mt-1 w-full rounded-md border p-2"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="updatedCode"
            className="block text-sm font-medium text-gray-600"
          >
            New Code
          </label>
          <textarea
            id="updatedCode"
            name="updatedCode"
            value={formData.updatedCode}
            onChange={handleChange}
            className="mt-1 w-full rounded-md border p-2"
          ></textarea>
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="rounded-md bg-indigo-500 py-2 px-4 text-white transition duration-300 hover:bg-indigo-600"
          >
            Update Code
          </button>
        </div>
      </form>
      {statusMessage && (
        <div className="mt-4 text-green-500">{statusMessage}</div>
      )}
    </div>
  );
};

export default UpdateCode;
