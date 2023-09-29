import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function About() {
  return (
    <>
      <Navbar />
      <div className="bg-transparent py-10 w-full">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold mb-6 text-center">About Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-lg">
            We believe that everyone should have the opportunity to learn about and contribute to open source. Our mission is to make open source contribution accessible and inclusive for everyone, regardless of their skill level or background.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-4">How It Works</h2>
            <p className="text-lg">
            Our platform provides a variety of resources to help individuals learn about open source contribution, connect with mentors, and find projects that match their skills and interests. We also offer a supportive community where learners can ask questions, share their work, and get feedback from others.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Join Us</h2>
            <p className="text-lg">
            If you are interested in learning more about open source contribution, we encourage you to join our community.
            </p>
          </div>
        </div>
      </div>
    </div>
      <Footer />
    </>
  );
}