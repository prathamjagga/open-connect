/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import Link from "next/link";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function Index() {
	return (
		<>
			<IndexNavbar fixed />
			<section className="header relative pt-16 items-center flex h-screen max-h-860-px">
				<div className="container mx-auto items-center flex flex-wrap">
					<div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
						<div className="pt-32 sm:pt-0">
							<h2 className="font-semibold text-4xl text-blueGray-600">
								Welcome to OpenExplore - Your motivator for the Open Source!
							</h2>
							<p className="mt-4 text-lg leading-relaxed text-blueGray-500">
								Join the open source movement and make a difference. Learn how
								to contribute, find a mentor, and start making your impact
								today.
							</p>
							<div className="mt-12">
								<a
									href="https://github.com/AnupK1234/Open-Source-Hackfest"
									target="_blank"
									className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-400 active:bg-blueGray-500 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
								>
									Get started
								</a>
								<a
									// href="https://github.com/creativetimofficial/notus-nextjs?ref=nnjs-index"
									className="github-star ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg"
									target="_blank"
								>
									Github Star
								</a>
							</div>
						</div>
					</div>
				</div>
				<img
					className="absolute top-0 b-auto right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 max-h-860-px"
					src="/img/pattern_nextjs.png"
					alt="..."
				/>
			</section>

			<section className="mt-48 md:mt-40 pb-40 relative bg-blueGray-100">
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
				<div className="container mx-auto">
					<div className="flex flex-wrap items-center">
						<div className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-32">
							<div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-blueGray-700">
								<img
									alt="..."
									src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
									className="w-full align-middle rounded-t-lg"
								/>
								<blockquote className="relative p-8 mb-4">
									<svg
										preserveAspectRatio="none"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 583 95"
										className="absolute left-0 w-full block h-95-px -top-94-px"
									>
										<polygon
											points="-30,95 583,95 583,65"
											className="text-blueGray-700 fill-current"
										></polygon>
									</svg>
									<h4 className="text-xl font-bold text-white">
										Great for your open source journey!
									</h4>
									<p className="text-md font-light mt-2 text-white">
										Put together your experience in this community, find
										mentors, get profile review and more.
									</p>
								</blockquote>
							</div>
						</div>

						<div className="w-full md:w-6/12 px-4">
							<div className="flex flex-wrap">
								<div className="w-full md:w-6/12 px-4">
									<div className="relative flex flex-col mt-4">
										<div className="px-4 py-5 flex-auto">
											<div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
												<i className="fas fa-sitemap"></i>
											</div>
											<h6 className="text-xl mb-1 font-semibold">
												Mentor Matching
											</h6>
											<p className="mb-4 text-blueGray-500">
												We come with mentor recommendations powered by Streamlit
												and AI.
											</p>
										</div>
									</div>
									<div className="relative flex flex-col min-w-0">
										<div className="px-4 py-5 flex-auto">
											<div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
												<i className="fas fa-drafting-compass"></i>
											</div>
											<h6 className="text-xl mb-1 font-semibold">
												What's trending?
											</h6>
											<p className="mb-4 text-blueGray-500">
												Explore what is trending in open source.
											</p>
										</div>
									</div>
								</div>
								<div className="w-full md:w-6/12 px-4">
									<div className="relative flex flex-col min-w-0 mt-4">
										<div className="px-4 py-5 flex-auto">
											<div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
												<i className="fas fa-newspaper"></i>
											</div>
											<h6 className="text-xl mb-1 font-semibold">
												Github Analytics
											</h6>
											<p className="mb-4 text-blueGray-500">
												Get Personalised analytics based on your github profile.
											</p>
										</div>
									</div>
									<div className="relative flex flex-col min-w-0">
										<div className="px-4 py-5 flex-auto">
											<i className="fas fa-newspaper"></i>
											<div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white"></div>
											<h6 className="text-xl mb-1 font-semibold">Community</h6>
											<p className="mb-4 text-blueGray-500">
												Join the community and get help from the community.
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="container mx-auto px-4 pb-32 pt-48">
					<div className="items-center flex flex-wrap">
						<div className="w-full md:w-5/12 ml-auto px-12 md:px-4">
							<div className="md:pr-12">
								<div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
									<i className="fam fa-fingerprint" />
								</div>
								<h3 className="text-3xl font-semibold">Hi Developers 👋</h3>

								<ul className="list-none mt-6">
									<li className="py-2">
										<div className="flex items-center">
											<div>
												<span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
													<i className="fas fa-fingerprint"></i>
												</span>
											</div>
											<div>
												<h4 className="text-blueGray-500">
													Built by Developers for Developers
												</h4>
											</div>
										</div>
									</li>
									<li className="py-2">
										<div className="flex items-center">
											<div>
												<span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
													<i className="fab fa-html5"></i>
												</span>
											</div>
											<div>
												<h4 className="text-blueGray-500">
													Carefully crafted code!
												</h4>
											</div>
										</div>
									</li>
									<li className="py-2">
										<div className="flex items-center">
											<div>
												<span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
													<i className="far fa-paper-plane"></i>
												</span>
											</div>
											<div>
												<h4 className="text-blueGray-500">
													We love open latest tech and we are built on it.
												</h4>
											</div>
										</div>
									</li>
								</ul>
							</div>
						</div>

						<div className="w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0">
							<img
								alt="..."
								className="max-w-full rounded-lg shadow-xl"
								style={{
									transform:
										"scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg)",
								}}
								src="/img/documentation.png"
							/>
						</div>
					</div>
				</div>

				<div className="justify-center text-center flex flex-wrap mt-24">
					<div className="w-full md:w-6/12 px-12 md:px-4">
						<h2 className="font-semibold text-4xl">Glimpse of the App.</h2>
					</div>
				</div>
			</section>

			<section className="block relative z-1 bg-blueGray-600">
				<div className="container mx-auto">
					<div className="justify-center flex flex-wrap">
						<div className="w-full lg:w-12/12 px-4  -mt-24">
							<div className="flex flex-wrap">
								<div className="w-full lg:w-4/12 px-4">
									<h5 className="text-xl font-semibold pb-4 text-center">
										Login Functionality
									</h5>
									<Link href="/auth/login">
										<div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
											<img
												alt="..."
												className="align-middle border-none max-w-full h-auto rounded-lg"
												src="/img/login.jpg"
											/>
										</div>
									</Link>
								</div>

								<div className="w-full lg:w-4/12 px-4">
									<h5 className="text-xl font-semibold pb-4 text-center">
										Public Profile
									</h5>
									<Link href="/profile">
										<div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
											<img
												alt="..."
												className="align-middle border-none max-w-full h-auto rounded-lg"
												src="/img/profile.jpg"
											/>
										</div>
									</Link>
								</div>
								<div className="w-full lg:w-4/12 px-4">
									<h5 className="text-xl font-semibold pb-4 text-center">
										AI Mentor Matching
									</h5>
									<Link href="/profile">
										<div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
											<img
												alt="..."
												className="align-middle border-none max-w-full h-auto rounded-lg"
												src="https://seeklogo.com/images/S/streamlit-logo-B405F7E2FC-seeklogo.com.png"
											/>
										</div>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="py-20 bg-blueGray-600 overflow-hidden">
				<div className="container mx-auto pb-64">
					<div className="flex flex-wrap justify-center">
						<div className="w-full md:w-5/12 px-12 md:px-4 ml-auto mr-auto md:mt-64">
							<div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
								<i className="fas fa-code-branch text-xl"></i>
							</div>
							<h3 className="text-3xl mb-2 font-semibold leading-normal text-white">
								Open Source
							</h3>
							<p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-400">
								Since{" "}
								<a
									href="https://tailwindcss.com/?ref=creative"
									className="text-blueGray-300"
									target="_blank"
								>
									Tailwind CSS
								</a>{" "}
								is an open source project we wanted to continue this movement
								too. You can give this version a try to feel the design and also
								test the quality of the code!
							</p>
							<p className="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-400">
								Get it free on Github and please help us spread the news with a
								Star!
							</p>
							<a
								// href="https://github.com/creativetimofficial/notus-nextjs?ref=nnjs-index"
								target="_blank"
								className="github-star mt-4 inline-block text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg"
							>
								Github Star
							</a>
						</div>

						<div className="w-full md:w-4/12 px-4 mr-auto ml-auto mt-32 relative">
							<i className="fab fa-github text-blueGray-700 absolute text-55 -top-150-px -right-100 left-auto opacity-80"></i>
						</div>
					</div>
				</div>
			</section>

			<section className="pb-16 bg-blueGray-200 relative pt-32">
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
							className="text-blueGray-200 fill-current"
							points="2560 0 2560 100 0 100"
						></polygon>
					</svg>
				</div>

				<div className="container mx-auto">
					<div className="flex flex-wrap justify-center bg-white shadow-xl rounded-lg -mt-64 py-16 px-12 relative z-10">
						<div className="w-full text-center lg:w-8/12">
							<p className="text-4xl text-center">
								<span role="img" aria-label="love">
									😍
								</span>
							</p>
							<h3 className="font-semibold text-3xl">
								Do you love this Project?
							</h3>

							<div className="sm:block flex flex-col mt-10">
								<a
									href="https://github.com/AnupK1234/Open-Source-Hackfest"
									target="_blank"
									className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-2 bg-blueGray-400 active:bg-blueGray-500 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
								>
									Get started
								</a>
								<a
									href="https://github.com/AnupK1234/Open-Source-Hackfest"
									target="_blank"
									className="github-star sm:ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg"
								>
									<i className="fab fa-github text-lg mr-1"></i>
									<span>Help With a Star</span>
								</a>
							</div>
							<div className="text-center mt-16"></div>
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</>
	);
}
