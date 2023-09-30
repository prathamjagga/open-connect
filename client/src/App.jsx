import React from "react";
import { Route, Routes } from "react-router-dom";
import './App.css';
import Home from "./components/Home.jsx";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Contact from "./components/Contact";
import About from "./components/About";
import AIMatching from "./components/AIMatching";
import SuccessStories from "./components/SuccessStories";
import ExplorePage from "./components/ExplorePage";
import Mentor from "./components/mentor/Mentor";


function App() {

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/about' element={<About />} />
      <Route path='/findmentor' element={<AIMatching />} />
      <Route path='/explore' element={<ExplorePage />} />
      <Route path='/stories' element={<SuccessStories />} />
      <Route path='/mentordash' element={<Mentor />} />
    </Routes>    
  );
}

export default App