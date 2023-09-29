import React from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import HP1 from '../assets/Img1.jpg';

function Home() {
  return (
    <>
      <Navbar />
      <img src={HP1} alt="Img1" className="h-96"/>
      <Footer />
    </>
  );
}

export default Home