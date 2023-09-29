import React from "react";
import { Route, Routes } from "react-router-dom";
import './App.css';
import Home from "./components/Home.jsx";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Contact from "./components/Contact";
import About from "./components/About";

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/about' element={<About />} />
    </Routes>    
  );
}

export default App