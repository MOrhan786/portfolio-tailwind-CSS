"use client";
import Typewriter from "typewriter-effect";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-gray-900">
      <title>Fatima Asif Porfolio</title>

      {/* header section */}

      {/* navbar */}
      <header className="text-white body-font sticky top-0 z-50 shadow-md">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center bg-gray-900 ">
        
           <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-10 h-10 text-white p-2 bg-orange-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="portfolio"></path>
            </svg>
            <span className="ml-3 text-xl">Fatima Asif</span>
          </a> 
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <a className="mr-5 hover:text-red-600">Home</a>
            <a className="mr-5 hover:text-red-600">About Us</a>
            <a className="mr-5 hover:text-red-600">Contact Us</a>
            <a className="mr-5 hover:text-red-600">Skills</a>
          </nav>
          <button className="inline-flex items-center bg-white border-0 py-1 px-3 focus:outline-none hover:bg-green-300 rounded text-gray-900 mt-4 md:mt-0">
            GitHub
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </header>

      {/* hero section */}
      <div>
        <header>
          <section className="text-gray-600 body-font">
            <div className="container mx-auto flex flex-col px-5 py-24 justify-center items-center  bg-gray-300">
              {/* here this is image  */}
              <img
                className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
                alt="hero"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOneYfrkIg4Kpi-OBdiI0RkoWPfNGl9y7Wcw&s"
              />
              <div className="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
                {/* typewriter effect */}
                <h1 className="title-font sm:text-2xl text-3xl mb-4 font-medium text-gray-900">
                  <Typewriter
                    options={{
                      strings: ["Typescript", "HTML", "CSS"],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </h1>
                <p className="mb-8 leading-relaxed">
                  "Hi, I'm Fatima Asif, a dedicated student currently enrolled
                  in the Governor of Sindh's Artificial Intelligence, Web 3.0,
                  and Metaverse program. I am passionate about emerging
                  technologies and excited to explore the future of AI,
                  blockchain, and immersive digital experiences. My goal is to
                  develop skills that will help shape the next generation of the
                  web and virtual worlds."
                </p>
                <div className="flex w-full justify-center items-end">
                  <div className="relative mr-4 lg:w-full xl:w-1/2 w-2/4 md:w-full text-left">
                    <label
                      htmlFor="hero-field"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Newsletter
                    </label>
                    <input
                      type="text"
                      id="hero-field"
                      name="hero-field"
                      className="w-full bg-gray-100 bg-opacity-50 rounded focus:ring-2 focus:ring-pink-200 focus:bg-transparent border border-gray-300 focus:border-pink-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                  <button className="inline-flex text-white bg-pink-500 border-0 py-2 px-3 focus:outline-none hover:bg-green-600 rounded textt-l">
                    subscribe now
                  </button>
                </div>
                <p className="text-sm mt-2 text-gray-500 mb-8 w-full">
                  Neutra shabby chic ramps, viral fixie.
                </p>
                <div className="flex">
                  <button className="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-pink-300 focus:outline-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="w-6 h-6"
                      viewBox="0 0 512 512"
                    >
                      <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z"></path>
                    </svg>
                    <span className="ml-4 flex items-start flex-col leading-none">
                      <span className="text-xs text-gray-600 mb-1">
                        GET IT ON
                      </span>
                      <span className="title-font font-medium">
                        Google Play
                      </span>
                    </span>
                  </button>
                  <button className="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center ml-4 hover:bg-blue-300 focus:outline-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="w-6 h-6"
                      viewBox="0 0 305 305"
                    >
                      <path d="M40.74 112.12c-25.79 44.74-9.4 112.65 19.12 153.82C74.09 286.52 88.5 305 108.24 305c.37 0 .74 0 1.13-.02 9.27-.37 15.97-3.23 22.45-5.99 7.27-3.1 14.8-6.3 26.6-6.3 11.22 0 18.39 3.1 25.31 6.1 6.83 2.95 13.87 6 24.26 5.81 22.23-.41 35.88-20.35 47.92-37.94a168.18 168.18 0 0021-43l.09-.28a2.5 2.5 0 00-1.33-3.06l-.18-.08c-3.92-1.6-38.26-16.84-38.62-58.36-.34-33.74 25.76-51.6 31-54.84l.24-.15a2.5 2.5 0 00.7-3.51c-18-26.37-45.62-30.34-56.73-30.82a50.04 50.04 0 00-4.95-.24c-13.06 0-25.56 4.93-35.61 8.9-6.94 2.73-12.93 5.09-17.06 5.09-4.64 0-10.67-2.4-17.65-5.16-9.33-3.7-19.9-7.9-31.1-7.9l-.79.01c-26.03.38-50.62 15.27-64.18 38.86z"></path>
                      <path d="M212.1 0c-15.76.64-34.67 10.35-45.97 23.58-9.6 11.13-19 29.68-16.52 48.38a2.5 2.5 0 002.29 2.17c1.06.08 2.15.12 3.23.12 15.41 0 32.04-8.52 43.4-22.25 11.94-14.5 17.99-33.1 16.16-49.77A2.52 2.52 0 00212.1 0z"></path>
                    </svg>
                    <span className="ml-4 flex items-start flex-col leading-none">
                      <span className="text-xs text-gray-600 mb-1">
                        Download on the
                      </span>
                      <span className="title-font font-medium">App Store</span>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </section>
        </header>

        {/*imge  card designe component */}
        {/* imge tag m two things hoti aik src(source) alt(alter ) tag*/}
        <section className="px-10 py-3.5 text-gray-800 body-font ">
          <div className="container px-10 py-2 mx-auto bg-gray-300 ">
            <div p-4 text-center>
              <h3 className="text-center text-green-600">Dev.To Blog</h3>
              <h1 className=" text-center title-font sm:text-2xl text-2xl mb-4 font-medium text-gray-900">
                <Typewriter
                  options={{
                    strings: [
                      "Welcome to Our Blog Hub:",
                      " Your Gateway to Tech Trends",
                      "Tutorials",
                      "and Expert Insights",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </h1>

              <p className="mb-8 text-center leading-relaxed ">
                Welcome to our blog hub! Dive into a diverse range of articles
                that cover everything from cutting-edge technology trends to
                in-depth tutorials and expert insights. Whether you're a curious
                beginner or a seasoned professional, our blog offers valuable
                content to fuel your knowledge and keep you ahead of the curve.
                Explore, learn, and stay inspired with our engaging posts
                designed to empower your journey through the ever-evolving world
                of tech and innovation.
              </p>
            </div>
          </div>
        </section>
        {/* here this is boxes start */}

        <section className="text-gray-600 body-font">
          <div className=" ">
            <div className="flex flex-wrap -m-4">
              {/* 1st box */}
              <div className="p-4 md:w-1/4">
                <div className="bg-white shadow-[0_4px_25px_-5px_rgba(0,0,0,0.4)] border p-2 w-full max-w-sm rounded-lg font-sans overflow-hidden mx-auto mt-4">
                  <img
                    className="lg:h-48 md:h-36 w-full object-cover object-center"
                    src="https://img.freepik.com/free-photo/school-supplies-arrangement-table_23-2148939159.jpg "
                    alt="calculater img"
                  />
                  <div className="p-6">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                      CATEGORY
                    </h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                      Project 01:Calculator
                    </h1>
                    <p className="leading-relaxed mb-3">
                      escription: A simple Calculator app that performs basic arithmetic
                      operation. Perfect for learning the basics of JavaScript
                      function and user interface.
                    </p>
                    <div className="flex items-center flex-wrap ">
                      <button className="mt-6 px-5 py-2.5 w-full rounded-lg text-white text-sm tracking-wider font-semibold border-spacing-2 outline-none bg-blue-600 hover:bg-indigo-900">
                        Read More
                      </button>
                      <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                        <svg
                          className="w-4 h-4 mr-1"
                          stroke="currentColor"
                          stroke-width="2"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          viewBox="0 0 24 24"
                        >
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                          <circle cx="12" cy="12" r="3"></circle>
                        </svg>
                        1.2K
                      </span>
                      <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                        <svg
                          className="w-4 h-4 mr-1"
                          stroke="currentColor"
                          stroke-width="2"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          viewBox="0 0 24 24"
                        >
                          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                        </svg>
                        6
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {/* 2nd box */}

              <div className="p-4 md:w-1/4">
                <div className="bg-white shadow-[0_4px_25px_-5px_rgba(0,0,0,0.4)] border p-2 w-full max-w-sm rounded-lg font-sans overflow-hidden mx-auto mt-4">
                  <img
                    className="lg:h-48 md:h-36 w-full object-cover object-center"
                    src="https://plus.unsplash.com/premium_photo-1661434648069-3063192e1ad5?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXRtJTIwbWFjaGluZXxlbnwwfHwwfHx8MA "
                    alt="ATM img"
                  />
                  <div className="p-6">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                      CATEGORY
                    </h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                      Project 02:ATM
                    </h1>
                    <p className="leading-relaxed mb-3">
                      Description: A simple of an ATM system that handles
                      deposits, withdrawls, and balance inquires.Useful for
                      undersatnding user input and data management
                    </p>
                    <div className="flex items-center flex-wrap ">
                      <button className="mt-6 px-5 py-2.5 w-full rounded-lg text-white text-sm tracking-wider font-semibold border-spacing-2 outline-none bg-blue-600 hover:bg-indigo-900">
                        Read More
                      </button>
                      <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                        <svg
                          className="w-4 h-4 mr-1"
                          stroke="currentColor"
                          stroke-width="2"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          viewBox="0 0 24 24"
                        >
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                          <circle cx="12" cy="12" r="3"></circle>
                        </svg>
                        1.2K
                      </span>
                      <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                        <svg
                          className="w-4 h-4 mr-1"
                          stroke="currentColor"
                          stroke-width="2"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          viewBox="0 0 24 24"
                        >
                          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                        </svg>
                        6
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {/* end */}
              {/* 3rd box */}
              <div className="p-4 md:w-1/4">
                <div className="bg-white shadow-[0_4px_25px_-5px_rgba(0,0,0,0.4)] border p-2 w-full max-w-sm rounded-lg font-sans overflow-hidden mx-auto mt-4">
                  <img
                    className="lg:h-48 md:h-36 w-full object-cover object-center"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPus9-d27Re0McwJo-TDxg9Sy_1oK9YtnFXQ&s"
                    alt="Currency Convertor img"
                  />
                  <div className="p-6">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                      CATEGORY
                    </h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                      Project 03:Currency Convertor 
                    </h1>
                    <p className="leading-relaxed mb-3">
                     Description:A currency convertor that allows useres to convert between
                     different currencies using real-time exchange rates.Demonstrates
                     API integration and data handling.
                    </p>
                    <div className="flex items-center flex-wrap ">
                      <button className="mt-6 px-5 py-2.5 w-full rounded-lg text-white text-sm tracking-wider font-semibold border-spacing-2 outline-none bg-blue-600 hover:bg-indigo-900">
                        Read More
                      </button>
                      <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                        <svg
                          className="w-4 h-4 mr-1"
                          stroke="currentColor"
                          stroke-width="2"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          viewBox="0 0 24 24"
                        >
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                          <circle cx="12" cy="12" r="3"></circle>
                        </svg>
                        1.2K
                      </span>
                      <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                        <svg
                          className="w-4 h-4 mr-1"
                          stroke="currentColor"
                          stroke-width="2"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          viewBox="0 0 24 24"
                        >
                          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                        </svg>
                        6
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {/* 4th box */}
              <div className="p-4 md:w-1/4">
                <div className="bg-white shadow-[0_4px_25px_-5px_rgba(0,0,0,0.4)] border p-2 w-full max-w-sm rounded-lg font-sans overflow-hidden mx-auto mt-4">
                  <img
                    className="lg:h-48 md:h-36 w-full object-cover object-center"
                    src="https://cdn8.gametop.com/download-free-games/number-world-adventure/b1.jpg"
                    alt="adventure Game img"
                  />
                  <div className="p-6">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                      CATEGORY
                    </h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                      Project 04:adventure Game
                    </h1>
                    <p className="leading-relaxed mb-3">
                       Description:Atext based adventure game where plyaers
                        make choices that affect the outcome.Great for practicing
                        control flow and narrative development. 
                    </p>
                    <div className="flex items-center flex-wrap ">
                      <button className="mt-6 px-5 py-2.5 w-full rounded-lg text-white text-sm tracking-wider font-semibold border-spacing-2 outline-none bg-blue-600 hover:bg-indigo-900">
                        Read More
                      </button>
                      <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                        <svg
                          className="w-4 h-4 mr-1"
                          stroke="currentColor"
                          stroke-width="2"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          viewBox="0 0 24 24"
                        >
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                          <circle cx="12" cy="12" r="3"></circle>
                        </svg>
                        1.2K
                      </span>
                      <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                        <svg
                          className="w-4 h-4 mr-1"
                          stroke="currentColor"
                          stroke-width="2"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          viewBox="0 0 24 24"
                        >
                          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                        </svg>
                        6
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* blog section end */}

        {/* footer here */}
      </div>
      {/* Feature section */}
      {/* project Fetures & Commands 
Explores the essential features of each TypeScript project and easily run them using the npx commands provided below:
// npm comand project paste krni h 
  */}
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto  bg-gray-300">
          <div className="text-center mb-20 ">
            <h1 className="sm:text-3xl text-2xl font-black text-center title-font text-green-900 mb-4">
              project Fetures & Commands{" "}
            </h1>
            <p className="text-black leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            "Explore the essential features of each TypeScript project and easily run them by following the Vercel link provided below."
            </p>
          </div>
          <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            <div className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                  className="text-green-500 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="title-font font-medium">https://vercel.com/morhans-projects/milestone-3/H88pJkEjYPnQSE6RDAHiFWEz9vz4</span>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                  className="text-green-500 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="title-font font-medium">https://vercel.com/morhans-projects/mileston-1-2/3TcXVdN4mHv2NZ6Ss11dd8uUxWKz</span>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                  className="text-green-500 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="title-font font-medium">https://vercel.com/morhans-projects/milestone-4/H4xMLo29ibSbjXST7a69i8UyvEXY</span>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                  className="text-red-700 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="title-font font-medium">https://vercel.com/morhans-projects/milestone-5/3z3kp7cCND1hraGaEFfMuadMoQMY</span>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-100 rounded flex p-2 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                  className="text-green-500 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="title-font font-medium">https://vercel.com/morhans-projects/class-hw-assignments-3/E7xE5XAppnSzB5VHn5FHLuk1DQNx</span>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                  className="text-red-500 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="title-font font-medium">https://vercel.com/morhans-projects/class-hw-assignments-3/E7xE5XAppnSzB5VHn5FHLuk1DQNx</span>
              </div>
            </div>
            {/* here we paste google button */}
            <button className="flex mx-auto mt-16 text-white bg-yellow-300 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg">
              {/* yahn github ka yag (icone) lgay gy svg ko close kr k */}
              <img
                className="w-15 h-10 "
                src="data:image/png;base64,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"
                alt=""
              />
              {/* <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 512 512">
          <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z"></path>
        </svg> */}
              <span className="ml-4 flex items-start flex-col leading-none">
                <span className="text-xs text-white mb-1">
                  Visit GitHub(yahn apna github ka user name b lik sakty h)
                </span>
                <span className="title-font font-bold text-black">
                  Google Play
                </span>
              </span>
            </button>
            {/* ending poin google button */}
          </div>

          {/* yahn apny github ka link provide karna h (mehak almgir ki video s dekhna h kaisy link dety h butoon k liya)
    <button className="flex mx-auto mt-16 text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg">Visit My Github </button> */}
        </div>
      </section>






      {/* contact us section */}
      <section className="text-gray-600 body-font relative">
  <div className="absolute inset-0 bg-gray-300">
    <iframe width="100%" height="100%" title="map"  src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"/>
  </div>
  <div className="container px-5 py-24 mx-auto flex">
    <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
      <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Contact Us</h2>
      <p className="leading-relaxed mb-5 text-gray-600">please fill this form if you have any quries or complains or if you have message for us. </p>
      <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
        <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div className="relative mb-4">
        <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
        <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
      </div>
      <button className="text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg">Submit</button>
      <p className="text-xs text-gray-500 mt-3">Please read our privacy policy for any issue.</p>
    </div>
  </div>
</section>

{/* footer section */}
 
<div>
      <footer className=" bg-gray-900 text-white text-center p-8 ">
        <p>&copy; 2024 xyz. All rights reserved.</p>
      </footer>
    </div>

    </main>
    // 
  );
}
