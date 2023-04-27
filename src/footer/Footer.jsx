import { GrFacebookOption, GrInstagram } from "react-icons/gr";
import Logo from "../assets/logo.svg";
import Cell from "../assets/cell.svg";
import Message from "../assets/message.svg";

import "./footer.css";
import "./responsive-footer.css";

export const Footer = () => {
  return (
    <div className="fo-container">
      <div className="fo-grid">
        <div className="">
          <img className="fo-logo" src={Logo} alt="" />
          <h1 className="fo-text">
            Follow us on our social networks and don't miss our latest news and
            events.
          </h1>
        </div>
        <div className="fo-medium">
          <img className="fo-logocell" src={Cell} alt="" />
          <p className="fo-cell">+5(322)374 6739</p>
          <img className="fo-logomessage" src={Message} alt="" />
          <p className="fo-message">servicio@lurdes.co</p>
          <div className="fo-redes">
            <button type="button">
              <GrFacebookOption className="fo-face" />
            </button>
          </div>
          <div className="fo-redes1">
            <button type="button">
              <GrInstagram className="fo-insta" />
            </button>
          </div>
          <img className="" src="" alt="" />
        </div>
        <div className="fo-end">
          <h1 className="fo-subscribe">SUBSCRIBE TO OUR NEWSLETTER!</h1>
          <input className="fo-input" type="text" placeholder="Your Email" />
          <button className="fo-send">SEND</button>
        </div>
      </div>
      <div className="fo-copy">
        <p className="fo-copytext">Tems & Conditions | privacity Policy</p>
        <p className="fo-copyrigth">
          @ Copyrigth 2020 * 2021 Ingenuity & Solutions LLC All Rights Reserved.
        </p>
      </div>
    </div>
  );
};
