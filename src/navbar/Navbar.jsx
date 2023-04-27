import Logo from "../assets/logo.svg";
import { GrFacebookOption, GrInstagram } from "react-icons/gr";

import "./navbar.css";
import "./responsive-navbar.css";

export const Navbar = () => {
  return (
    <div className="nav">
      <div className="nav-header">
        <div>
          <img className="nav-logo" src={ Logo } alt="" />
        </div>
      </div>

      <div className="nav-name">
        <button type="button" className="nav-textname">
          MARIA REINA PARISH
        </button>
      </div>

      <div className="nav-instagram">
        <button type="button">
          <GrInstagram className="nav-text-instagram" />
        </button>
      </div>
      <div className="nav-facebook">
        <button type="button">
          <GrFacebookOption className="nav-text-facebook" />
        </button>
      </div>

      <div className="nav-btn">
        <label for="nav-check">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>

      <div className="nav-links">
        <a className="nav-home">HOME</a>
        <a className="nav-home">THE CREW</a>
        <a className="nav-home">EVENTS</a>
        <a className="nav-home">WHAT'S NEW</a>
        <a className="nav-home-office">VIRTUAL OFFICE</a>
        <a className="nav-home">CONTACT</a>
      </div>
    </div>
  );
};
