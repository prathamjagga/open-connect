import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="bg-transparent mt-6">
        <div className="container mx-auto flex flex-row-reverse justify-between px-4 py-3">

          <ul className="flex space-x-36">
            <li>
              <Link to="/" className="text-[#000000] hover:text-blue-700 hover:underline text-[1.25rem] font-[600]">
                Explore
              </Link>
            </li>
            <li>
              <Link to="/mentor" className="text-[#000000] hover:text-blue-700 hover:underline text-[1.25rem] font-[600]">
                Find Mentor
              </Link>
            </li>
            <li>
              <Link to="/stories" className="text-[#000000] hover:text-blue-700 hover:underline text-[1.25rem] font-[600]">
                Success stories
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-[#000000] hover:text-blue-700 hover:underline text-[1.25rem] font-[600]">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-[#000000] hover:text-blue-700 hover:underline text-[1.25rem] font-[600]">
                Contact Us
              </Link>
            </li>
            <li className="bg-[#ff914d] border-2 border-dotted rounded-full px-3 py-1 w-35">
                <Link to="/login" className="text-[#000000] hover:text-blue-700 text-[1.25rem] font-[600]">
                  Login &gt;
                </Link>
            </li>
          </ul>

        </div>
      </nav>
    </>
  );
}