import React, { useCallback } from "react";
import { useEffect, useState, useRef } from "react";
import Typed from "typed.js";


const Blob = () => {
  const divRef = useRef();
  const titleRef = useRef();
  const el = useRef(null);
  const loadRef = useRef();
  const [mousePosition, setMousePosition] = useState({});

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    divRef.current.animate(
      {
        left: `${mousePosition.x}px`,
        top: `${mousePosition.y}px`,
      },
      { duration: 2000, fill: "forwards" }
    );

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mousePosition]);

 

  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  const handleMouseOver = (event) => {
    let iteration = 0;
    let interval = null;

    clearInterval(interval);

    interval = setInterval(() => {
      event.target.innerText = event.target.innerText
        .split("")
        .map((letter, index) => {
          if (index < iteration) {
            return event.target.dataset.value[index];
          }

          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");

      if (iteration >= event.target.dataset.value.length) {
        clearInterval(interval);
      }

      iteration += 1 / 4;
    }, 30);
  };


  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Web Developer", "Problem Solver", "Hard Worker"],
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 150,
      loop: true,
      showCursor: true,
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);



  return (
    <div id="blob__container" >
      <div id="blob" ref={divRef}></div>
      <div id="blur"></div>
      <div className="landing__text">
        <div className="title__container">
        <h1
          className="landing__title"
          ref={loadRef}
          data-value="Hello, I'm"
        >
          Hello, I'm
        </h1>
        <h1
          className="landing__title"
          id="title"
          onMouseEnter={handleMouseOver}
          data-value="Cole Morgan"
          ref={titleRef}
        >
          Cole Morgan
        </h1>
        </div>
        <div className="animated-typing">
          <span className="subtitle"> I am a</span>
          <span className="animation" ref={el}></span>
        </div>
        <div className="description">
          <h3>
            {" "}
            I am a skilled frontend developer with a passion for crafting beautiful
            and user-friendly websites. My expertise allows me to bring ideas to life and create
            exceptional digital experiences for clients and users.
          </h3>
        </div>
        <button className="contact__button">Lets get in contact!</button>
      </div>
    </div>

  );
};

export default Blob;
