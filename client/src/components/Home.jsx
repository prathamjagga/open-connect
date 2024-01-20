/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";
import PatterImg from "../assets/pattern_react.png";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Home() {
	return (
		<>
			<Navbar />
			<section className="header relative pt-16 items-center flex h-screen max-h-860-px">
				<div className="container mx-auto items-center flex flex-wrap">
					<div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
						<div className="pt-32 sm:pt-0">
							<h2 className="font-semibold text-4xl text-blueGray-600">
								Welcome to OpenConnect!
							</h2>
							<p className="mt-4 text-lg leading-relaxed text-blueGray-500">
								Join the open source movement and make a difference. Learn how
								to contribute, find a mentor, and start making your impact
								today.
							</p>
							<div className="mt-12">
								<a
									href=""
									target="_blank"
									className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blue-500 active:bg-lightBlue-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
								>
									Get started
								</a>
								<a
									href="https://github.com/AnupK1234/Open-Source-Hackfest"
									className="github-star ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-gray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
									target="_blank"
								>
									Github Star
								</a>
							</div>
						</div>
					</div>
				</div>

				<img
					className="absolute top-0 b-auto right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 max-h-860px"
					src={PatterImg}
					alt="..."
				/>
			</section>

			<div className="container mx-auto">
				<div className="flex flex-wrap items-center">
					<div className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-32">
						<div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-lightBlue-500">
							<img
								alt="..."
								src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
								className="w-full align-middle rounded-t-lg"
							/>
						</div>
					</div>

					<div
						className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
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
								className="text-blueGray-100 fill-current"
								points="2560 0 2560 100 0 100"
							></polygon>
						</svg>
					</div>
					<div className="w-full md:w-6/12 px-4">
						<div className="flex flex-wrap">
							<div className="w-full md:w-6/12 px-4">
								<div className="relative flex flex-col mt-4">
									<div className="px-4 py-5 flex-auto">
										<div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
											<i className="fas fa-sitemap"></i>
										</div>
										<h6 className="text-xl mb-1 font-semibold">
											Learn new skills and technologies
										</h6>
										<p className="mb-4 text-blueGray-500">
											Open source projects are a great way to learn new
											programming languages, frameworks, and libraries. You can
											also learn about best practices in software development
											and collaboration.
										</p>
									</div>
								</div>
								<div className="relative flex flex-col min-w-0">
									<div className="px-4 py-5 flex-auto">
										<div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-yellow-400">
											<i className="fas fa-drafting-compass"></i>
										</div>
										<h6 className="text-xl mb-1 font-semibold">
											Gain experience and build a portfolio
										</h6>
										<p className="mb-4 text-blueGray-500">
											Contributing to open source projects is a great way to
											gain experience working on real-world software. This
											experience can be valuable when applying for jobs or
											starting your own business.
										</p>
									</div>
								</div>
							</div>
							<div className="w-full md:w-6/12 px-4">
								<div className="relative flex flex-col min-w-0 mt-4">
									<div className="px-4 py-5 flex-auto">
										<div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-500">
											<i className="fas fa-newspaper"></i>
										</div>
										<h6 className="text-xl mb-1 font-semibold">
											Connect with other developers
										</h6>
										<p className="mb-4 text-blueGray-500">
											Open source communities are a great way to meet and
											connect with other developers from all over the world.
											This can lead to new friendships, collaborations, and job
											opportunities.
										</p>
									</div>
								</div>
								<div className="relative flex flex-col min-w-0">
									<div className="px-4 py-5 flex-auto">
										<div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-400"></div>
										<h6 className="text-xl mb-1 font-semibold">
											Make a difference
										</h6>
										<p className="mb-4 text-blueGray-500">
											Open source software is used by billions of people around
											the world. By contributing to open source projects, you
											can help to make the world a better place.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<Footer />
		</>
	);
}
