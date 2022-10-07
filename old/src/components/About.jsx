import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-1">
          <p className="text-4xl font-bold inline border-b-4 p-2 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl text-gray-300 mt-20">
        Hi, I am <span className="text-white decoration-sky-500 font-medium">Rohit Gupta</span> from Indore, Madhya Pradesh. A dedicated <span className="underline underline-offset-2 decoration-sky-500 font-medium">Full-Stack Web Developer</span> with a specialized skill set. Proficient in <span className="underline underline-offset-2 text-white-500 decoration-sky-500 font-medium">Data Structures and Algorithms</span>  to build robust web applications. <br /> Self-motivated and adaptable to both back-end and front-end whose mission in life is to build useful products for solving everyday problems.

        </p>

        <br /> <hr /> <br />

        <p className="text-xl text-gray-300">
        Joined the Military style Bootcamp to learn Software Development and Data Structures. Also learned many soft skills in the process from <span className="underline underline-offset-2 decoration-sky-500 font-medium">Masai School, Bengaluru, Karnataka.</span> October 2021 - July 2022. <br /> <br />
          Graduate from the University of Devi Ahilya Vishwavidyalaya, Indore from <span className="underline underline-offset-2 decoration-sky-500 font-normal">Acropolis Institute of Management Studies & Research</span>.
        </p>
        <br /> 
      </div>
    </div>
  );
};

export default About;