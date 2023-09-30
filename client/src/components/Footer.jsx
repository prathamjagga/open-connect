// import React from "react";
// import { Link } from "react-router-dom";

// export default function Footer() {
//   return (
//     <footer className="text-center dark:bg-blue-500 lg:text-left mt-10 w-full">
//       <div className="container p-6 mx-auto">
//         <div className="grid md:grid-cols-2 lg:grid-cols-2">
//           <div className="mb-6 justify-self-start">
//             <ul className="mb-0 list-none">
//               <li>
//                 <Link to="/" className="text-neutral-800 dark:text-neutral-200">
//                   Success stories
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/" className="text-neutral-800 dark:text-neutral-200">
//                   Partners
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/about"
//                   className="text-neutral-800 dark:text-neutral-200"
//                 >
//                   About Us
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/contact"
//                   className="text-neutral-800 dark:text-neutral-200"
//                 >
//                   Contact Us
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           <div className="mb-6 justify-self-end">
//             <h5 className="mb-2.5 font-bold uppercase text-neutral-800 dark:text-neutral-200">
//               Contact Us
//             </h5>

//             <ul className="mb-0 list-none">
//               <li>
//                 <a
//                   href="mailto:contact@mealmatters.com"
//                   className="text-neutral-800 dark:text-neutral-200"
//                 >
//                   contact@XYZ.com
//                 </a>
//               </li>
//               <li>
//                 <a href="#!" className="text-neutral-800 dark:text-neutral-200">
//                   +91 123456789
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//       <div className="bg-neutral-200 p-4 text-center text-neutral-700 dark:bg-neutral-700 dark:text-neutral-200">
//         © 2023 Copyright:
//         <a className="text-neutral-800 dark:text-neutral-400" href="#">
//           XYZ
//         </a>
//       </div>
//     </footer>
//   );
// }


import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="relative bg-blueGray-200 pt-8 pb-6">
        <div
          className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-blueGray-200 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap text-center lg:text-left">
            <div className="w-full lg:w-6/12 px-4">
              <h4 className="text-3xl font-semibold">Let's keep in touch!</h4>
              <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
                Find us on any of these platforms, we respond 1-2 business days.
              </h5>
              <div className="mt-6 lg:mb-0 mb-6">
                <button
                  className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <i class="fa-brands fa-twitter"></i>
                </button>
                <button
                  className="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <i className="fab fa-facebook-square"></i>
                </button>
                <button
                  className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <i className="fab fa-dribbble"></i>
                </button>
                <button
                  className="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <i className="fab fa-github"></i>
                </button>
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="flex flex-wrap items-top mb-6">
                <div className="w-full lg:w-4/12 px-4 ml-auto">
                  <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                    Useful Links
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href=""
                      >
                        About Us
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href=""
                      >
                        Blog
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href=""
                      >
                        Github
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                    Other Resources
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href=""
                      >
                        MIT License
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href=""
                      >
                        Terms & Conditions
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href=""
                      >
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href=""
                      >
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-blueGray-300" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-blueGray-500 font-semibold py-1">
                Copyright © {new Date().getFullYear()} XYZ
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
