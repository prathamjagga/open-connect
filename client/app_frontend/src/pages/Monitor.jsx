import React, { useState } from "react";

const MonitoringDashboard = () => {
  // Dummy data for conductor workflows
  const conductorWorkflowsData = [
    {
      name: "Workflow 1",
      lastRunTime: "2024-01-20 10:30 AM",
      output: "Dummy output 1",
    },
    {
      name: "Workflow 2",
      lastRunTime: "2024-01-19 02:45 PM",
      output: "Dummy output 2",
    },
    // Add more workflow data as needed
  ];

  // State for managing the collapsible items
  const [collapsed, setCollapsed] = useState({});

  // Function to toggle the collapse state
  const toggleCollapse = (workflowName) => {
    setCollapsed((prevState) => ({
      ...prevState,
      [workflowName]: !prevState[workflowName],
    }));
  };

  return (
    <div className="p-4">
      Note: this is a sample page, this and many features are coming soon 🚗
      {/* Application Monitoring Section */}
      <div className="mb-8">
        <h2 className="mb-4 text-3xl font-bold">
          Application Monitoring Dashboard
        </h2>
        {/* Dummy Graphs for illustration */}
        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-md bg-blue-500 p-4">
            <h3 className="mb-2 text-lg font-semibold">Server Load</h3>
            {/* Include your real monitoring graph component here */}
          </div>
          <div className="rounded-md bg-green-500 p-4">
            <h3 className="mb-2 text-lg font-semibold">Error Rate</h3>
            {/* Include your real monitoring graph component here */}
          </div>
          {/* Add more dummy graphs as needed */}
        </div>
      </div>
      {/* Conductor Workflows Section */}
      <div>
        <h2 className="mb-4 text-2xl font-bold">Conductor Workflows</h2>
        {conductorWorkflowsData.map((workflow) => (
          <div key={workflow.name} className="mb-4">
            <div
              className="flex cursor-pointer items-center justify-between bg-gray-300 p-3"
              onClick={() => toggleCollapse(workflow.name)}
            >
              <span className="font-semibold">{workflow.name}</span>
              <span>Last Run Time: {workflow.lastRunTime}</span>
            </div>
            {/* Collapsible content */}
            {collapsed[workflow.name] && (
              <div className="bg-gray-100 p-3">
                <p className="font-semibold">Output:</p>
                <pre>{workflow.output}</pre>
              </div>
            )}
            <button className="btn bg-blue-500" disabled={true}>
              Trigger Workflow Now (Coming Soon)
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MonitoringDashboard;
