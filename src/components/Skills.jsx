import React from "react";
import { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCss3Alt,
  faHtml5,
  faSquareJs,
  faReact,
  faGitAlt,
  faSass,
  faPython
} from "@fortawesome/free-brands-svg-icons";
import anime from "animejs";

const Skills = () => {
  const hideBlob = () => {
    document.getElementById("blob").style.display = "none";
  };

  const showBlob = () => {
    document.getElementById("blob").style.display = "block";
  };

  //  ANIME JS
 

  const [columns, setColumns] = useState(Math.floor(window.innerWidth/ 80));

  const [rows, setRows] = useState(Math.floor(window.innerHeight / 80));
  
  const tilesRef = useRef();

  const createGrid = () => {
    tilesRef.current.dangerouslySetInnerHTML = "";
    setRows(Math.floor(window.innerHeight / 80));
    setColumns(Math.floor(window.innerWidth / 80));
    tilesRef.current.style.setProperty("--columns", columns);
    tilesRef.current.style.setProperty("--rows", rows);
  };

  const [width, setWidth] = useState(window.innerWidth)

  window.onresize = () => {
    setWidth(window.innerWidth)
    createGrid();
  };

  window.onload = () => {
    createGrid();
  };

  useEffect(() => {
    createGrid()
  },[width])
  
  const [background, setGrid] = useState(false);

  const handleOnClick = (index) => {
    setGrid(!background);
    document.body.classList.toggle("toggled")
    anime({
      targets: ".tile",
      opacity: background ? 1 : 0,
      delay: anime.stagger(40, {
        grid: [columns, rows],
        from: index,
      }),
    });
  };

  


  return (
    <section
      id="tiles"
      ref={tilesRef}
      onMouseEnter={hideBlob}
      onMouseLeave={showBlob}
    >
      {Array.from(Array(rows * columns)).map((tile, index) => {
        return React.createElement("div", {
          className: "tile",
          index: index,
          key: index,
          onClick: () => handleOnClick(index),
        });
      })}
      <div className="skills__container">
        <h4 className="skills__title">My Skills</h4>
        <ul className="skills__list">
          <div className="skill">
            <FontAwesomeIcon icon={faHtml5} className="skill__icon"/>
            <p className="skill__name">React</p>
          </div>
          <div className="skill">
            <FontAwesomeIcon icon={faCss3Alt} className="skill__icon"/>
            <p className="skill__name">React</p>
            
          </div>
          <div className="skill">
            <FontAwesomeIcon icon={faSquareJs} className="skill__icon"/>
            <p className="skill__name">React</p>
          </div>
          <div className="skill">
            <FontAwesomeIcon icon={faReact} className="skill__icon"/>
            <p className="skill__name">React</p>
          </div>
          <div className="skill">
            <FontAwesomeIcon icon={faReact} className="skill__icon"/>
            <p className="skill__name">React</p>
          </div>
          <div className="skill">
            <FontAwesomeIcon icon={faReact} className="skill__icon"/>
            <p className="skill__name">React</p>
          </div>
          <div className="skill">
            <FontAwesomeIcon icon={faGitAlt} className="skill__icon"/>
            <p className="skill__name">React</p>
          </div>
          <div className="skill">
            <FontAwesomeIcon icon={faSass} className="skill__icon"/>
            <p className="skill__name">React</p>
          </div>
        </ul>
      </div>
    </section>
  );
};

export default Skills;
