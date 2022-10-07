import React from "react";
import "./Projects.css";
import { FaReact, FaHardHat } from "react-icons/fa";
import {
  SiBlockchaindotcom,
  SiHtml5,
  SiMaterialui,
  SiChai,
  SiEthereum,
  SiExpress,
  SiSocketdotio,
  SiTailwindcss,
  SiReactrouter,
  SiJavascript,
  SiMongodb,
  SiNodedotjs
} from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { VscJson } from "react-icons/vsc";
import { IoLogoJavascript } from "react-icons/io";
export const Projects = () => {
  return (
    <>
      <div className="section">
        <h2 className="section__title different" data-aos="fade-right">
          Projects
        </h2>
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src="https://roohit-gupta.netlify.app/static/media/yoox.89127ea2c2c440543b68.png"
                  alt="Yoox E-commerce Image"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>E-Commerce</h2>
              <p>
                An E-Commerce which is dealing with different kinds of
                API's, like Users API, Products API.
                it'll gives you smooth expereince and all functionality is working condition.
              </p>
              <div>

                <SiNodedotjs />
                <IoLogoJavascript />
                <FaReact />
                <SiExpress />
                <SiMongodb />

              </div>
              <div>
                <a
                  href="https://yoox-ecommerce.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/roohitgupta/YOOX-E-ECOMMERCE"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src="https://store-images.s-microsoft.com/image/apps.16894.c02476d2-2378-4f60-8290-b6d4b3842643.79a2ef6a-4775-4c79-8d93-9caf077660eb.1bbd88a4-0a17-4750-91a0-cd7d98f58e9d"

                  alt="Weather App Image"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>MyFitnessPal Clone </h2>
              <p>
                A react weather app, where your location will be asked and show result accordingly, you can also search any valid city's weather with graphical reorientation.
              </p>
              <div>
                <IoLogoJavascript />
                <FaReact />
                <SiTailwindcss />
              </div>
              <div>
                <a
                  href="https://weatherapp-rohit.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/roohitgupta/weather_app_react"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>


        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src="https://assets-global.website-files.com/628288c5cd3e8451380a36c7/629d0db724737441de0e681a_626ec283d3731710ef80eff9_bio-generator.png"
                  alt="Typing"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>Flash Type</h2>
              <p>
                Mini project of A Real time dynamic Bio Genrator app that helps you to build Profile Description with Image and Video itself, with 18 languages supoort. 
              </p>
              <div>
                <FaReact />
                <SiHtml5 />
                <DiCss3 />
                <SiTailwindcss />
              </div>
              <div>
                <a
                  href="https://biogenerator-rohit.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/roohitgupta/biogenrater_app"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src="https://miro.medium.com/max/875/1*2PD7SlV8Eh5aoQGcnK-uLw.png"
                  alt="Mednear"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>Mednear Clone</h2>
              <p>
                Mednear is the Primary Online Pharmacy in India that provides
                prescription, and generic medicines all over India.A collaborative project built by team of 6 executed
                in 5 days.
              </p>
              <div>
                <SiHtml5 />
                <DiCss3 />
                <IoLogoJavascript />
              </div>
              <div>
                <a
                  href="https://www.youtube.com/watch?v=BRRmteRFgLc"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/HrgChampion/Mednear-clone.git"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};