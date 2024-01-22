import React, { useState } from "react";

const DialogBox = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState("tab1");
  const [code, setCode] = useState("");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div
      className={`fixed inset-0 ${isOpen ? "block" : "hidden"} overflow-y-auto`}
    >
      <div className="flex min-h-screen items-end justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        {/* Background overlay */}
        <div
          className="fixed inset-0 transition-opacity"
          aria-hidden="true"
          onClick={onClose}
        >
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        {/* Dialog content */}
        <span
          className="hidden sm:inline-block sm:h-screen sm:align-middle"
          aria-hidden="true"
        >
          &#8203;
        </span>
        <div
          className="inline-block transform overflow-hidden rounded-lg bg-white text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:align-middle"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          {/* Close button */}
          <div
            className="absolute top-0 right-0 cursor-pointer p-4"
            onClick={onClose}
          >
            &times;
          </div>

          {/* Tab buttons */}
          <div className="mb-4 flex">
            <button
              className={`mx-2 px-4 py-2 ${
                activeTab === "tab1" ? "bg-blue-500 text-white" : "bg-gray-200"
              }`}
              onClick={() => handleTabChange("tab1")}
            >
              Static Site
            </button>
            <button
              className={`mx-2 px-4 py-2 ${
                activeTab === "tab2" ? "bg-blue-500 text-white" : "bg-gray-200"
              }`}
              onClick={() => handleTabChange("tab2")}
            >
              React/Angular/Vue - Coming Soon
            </button>
            {/* Add more tab buttons as needed */}
          </div>

          {/* Tab content */}
          <div className="p-4">
            {activeTab === "tab1" && (
              <div>
                <textarea
                  type="text"
                  placeholder="Paste your HTML code here to preview."
                  onChange={(e) => {
                    setCode(e.target.value);
                  }}
                  value={code}
                  style={{
                    width: "100%",
                    height: "400px",
                  }}
                />
                {/* <button>Preview code</button> */}
                <iframe
                  title="HTML Preview"
                  width="100%"
                  height="400"
                  frameBorder="0"
                  srcDoc={code}
                />
              </div>
            )}
            {activeTab === "tab2" && (
              <div>Coming soon for other technologies. </div>
            )}
            {/* Add more tab content as needed */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DialogBox;
