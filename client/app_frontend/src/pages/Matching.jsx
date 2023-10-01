import React from "react";

function Matching() {
  return (
    <div className="h-full">
      <h2 className="bold text-3xl font-bold">
        Our Mentor Matching is Powered by AI and Streamlit
      </h2>
      <div className="mx-auto w-6/12 content-center p-10 pb-20">
        <img
          src="https://cdn.analyticsvidhya.com/wp-content/uploads/2020/12/spark21.png"
          className="pb-5"
        />
        <a
          href="https://opensource-mentors.streamlit.app/"
          target="_blank"
          className="mx-auto content-center pt-5"
        >
          {" "}
          <button className="rounded-full bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700 ">
            Take me to mentor matching app on Stramlit!
          </button>
        </a>
      </div>
    </div>
  );
}

export default Matching;
