import React from "react";
import Logo from "../assets/logo.png";

const Nav = () => {
  return (
    <nav>
      <div className="nav__container">
        <figure className="logo__container">
          <img src={Logo} alt="" className="logo click" />
        </figure>
        <ul className="nav__links">
            <li className="nav__item link__hover-effect link__hover-effect--pink"><a href="" className="nav__link">Home</a></li>
            <li className="nav__item link__hover-effect link__hover-effect--pink"><a href="" className="nav__link">Projects</a></li>
            <li className="nav__item link__hover-effect link__hover-effect--pink"><a href="" className="nav__link">Skills</a></li>
            <li className="nav__item link__hover-effect link__hover-effect--pink" ><a href="" className="nav__link">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
