import React from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import HP1 from "../assets/Img11.png";

function Home() {
  return (
    <>
      <Navbar />
      <img src={HP1} alt="Img1" className="h-96 w-96 mt-10 ml-auto mr-auto" />
      <div className="flex flex-col justify-center items-center mt-0">
        <h1 className="text-5xl font-bold text-center">
          Welcome to <span className="text-blue-700 underline decoration-red-500">XYZ!</span>
        </h1>
        <p className="text-xl text-center mt-5">
        Join the open source movement and make a difference. Learn how to contribute, find a mentor, and start making your impact today.
        </p>
        <a
          href="/"
          className="bg-red-600 hover:bg-indigo-700 text-white font-bold py-4 px-3 rounded mt-5"
        >
          Let's Explore!
        </a>
      </div>
      
      <Footer />
    </>
  );
}

export default Home;
