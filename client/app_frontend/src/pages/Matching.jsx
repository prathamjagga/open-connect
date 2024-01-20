import React from "react";

function Matching() {
  return (
    <div className="h-full">
      <h2 className="bold text-3xl font-bold">
        Our Mentor Matching is Powered by AI and Taipy
      </h2>
      <div className="mx-auto w-6/12 content-center p-10 pb-20">
        <img
          src="https://assets-global.website-files.com/6523afe3ee9ea0be63e70260/65240704f70d0b1621015a33_Vectors-Wrapper.svg"
          className="1-full"
          style={{ height: "400px" }}
        />
        <a
          href="http://127.0.0.1:5000/"
          target="_blank"
          className="mx-auto content-center pt-5"
        >
          {" "}
          <button className="rounded-full bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700 ">
            Take me to mentor matching app on Taipy!
          </button>
        </a>
      </div>
    </div>
  );
}

export default Matching;
