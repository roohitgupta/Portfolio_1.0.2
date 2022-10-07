import React from "react";
import "./Introduction.css";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { ThemeContext } from "../../Context/theme";



export const Introduction = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <section id="#about">
        <div className="section" data-aos="fade-right">
          <h2 className="section__title">
            About <span className="different">Me</span>
          </h2>
          <div className={"introduction " + themename}>
            <div className="introduction_logocontainer">
              <img
                src="https://avatars.githubusercontent.com/u/96112427?v=4"
                alt="Images"
              />
            </div>
            <div className="introduction_datacontainer">
              <h4>
                Hi , I am{" "}
                <span className="different">Rohit Gutpa</span> from{" "}
                <span className="different"> Indore, Madhya Pradesh</span>. 
                A dedicated full-stack web developer with a specialized skill set.
            Proficient in data structures and algorithms to build robust web
            applications. Self-motivated and adaptable to both back-end and
            front-end whose mission in life is to build useful products for
            solving everyday problems.
              </h4>
              <h4>
                Some of my interests apart form Coding :
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Watching Documantiers{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Cricket Enthusiast{" "}
              </h4>
             
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Travelling{" "}
              </h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};