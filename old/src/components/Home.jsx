import React from "react";
import HeroImage from "../assets/rohit.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-1/2 w-3/4">
          <h3 className="text-5xl sm:text-6xl font-bold text-sky-500 h-2/5">
            <Typewriter
              options={{
                strings: [
                  "MERN Stack Developer",
                  "Full Stack Developer",
                  "React Developer",
                  "Node Developer"
                ],
                autoStart: true, 
                tartSpeed:90,
                loop: true,
                deleteSpeed: 60,
              }}
            />
          </h3>
          <p className="text-gray-500 py-4 max-w-lg ">
            An empathetic & hardworking individual with a problem-solving mindset who likes building websites. I love to work on web application using technologies like
            React, Node JS, MongoDB with Css frameworks like Tailwind, Bootstrap etc..
          </p>

          <div>
            <Link
              to="projects"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-800 to-sky-500 cursor-pointer"
            >
              Projects
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div className="w-2/5 ">
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-80% md:w-2/3"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;