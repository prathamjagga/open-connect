import React from "react";

function Analyse() {
  return (
    <div className="mx-auto h-full w-full content-center pt-8 text-center">
      <h3 className="bold pb-4 text-2xl font-bold">
        Below is the indepth analysis and statistics of your github profile,
        powered by the open source github stats tool by Tipsy 😀
      </h3>
      <iframe
        className="h-8/12 mb-10 w-full"
        height="450px"
        src={`https://profile-summary-for-github.com/user/${JSON.parse(
          localStorage.getItem("ghUsername")
        )}`}
      />
    </div>
  );
}

export default Analyse;
