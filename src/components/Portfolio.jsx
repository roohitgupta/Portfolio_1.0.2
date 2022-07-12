import React from "react";
import yoox from "../assets/portfolio/yoox.png";
import employee from "../assets/portfolio/employee.jpg";
import onbikes from "../assets/portfolio/onbikes.png";
import mednear from "../assets/portfolio/mednear.png";
import kfc from "../assets/portfolio/kfc.PNG";
import counter from "../assets/portfolio/counter2.gif";


const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: yoox,
      code: <a target="_blank" rel="noreferrer" href="https://github.com/roohitgupta/YOOX-E-ECOMMERCE">Code</a>,
      demo: <a target="_blank" rel="noreferrer" href="https://yoox-ecommerce.netlify.app">Demo</a>,

    },
    {
      id: 2,
      src: mednear,
      code: <a target="_blank" rel="noreferrer" href="https://github.com/HrgChampion/Mednear-clone">Code</a>,
      demo: <a target="_blank" rel="noreferrer" href="https://mednear.netlify.app/">Demo</a>,
    },
    {
      id: 3,
      src: onbikes,
      code: <a target="_blank" rel="noreferrer" href="https://github.com/Ritesh6997/ONN-BIke-Complete-Project">Code</a>,
      demo: <a target="_blank" rel="noreferrer" href="https://sharp-brahmagupta-a8b2e3.netlify.app/">Demo</a>,
    },
    {
      id: 4,
      src: kfc,
      code: <a target="_blank" rel="noreferrer" href="https://github.com/roohitgupta/KFC_Clone">Code</a>,
      demo: <a target="_blank" rel="noreferrer" href="https://frolicking-chimera-feaef0.netlify.app/">Demo</a>,
    },
    {
      id: 5,
      src: employee,
      code: <a target="_blank" rel="noreferrer" href="https://github.com/roohitgupta/entity-listing-application">Code</a>,
      demo: <a target="_blank" rel="noreferrer" href="https://github.com/roohitgupta/entity-listing-application">Demo</a>,
    },
    {
      id: 6,
      src: counter,
      code: <a target="_blank" rel="noreferrer" href="https://github.com/roohitgupta/counter-app-boilerplate">Code</a>,
      demo: <a target="_blank" rel="noreferrer" href="https://github.com/roohitgupta/counter-app-boilerplate">Demo</a>,
    },
    
  ];

  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline p-2 border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, code, demo }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  {demo}
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  {code} 
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;