import New1 from "../../assets/new1.png";
import New2 from "../../assets/new2.png";
import New3 from "../../assets/new3.png";
import New4 from "../../assets/new4.png";
import Logo from "../../assets/event.svg";

import "./new.css";
import "./responsive-new.css";

export const New = () => {
  return (
    <div className="nw-enter ">
      <div className="nw-container">
        <div className="nw-conect">
          <img className="nw-logo" src={ Logo } alt="" />
          <h1 className="nw-title">
            What's <span className="nw-titlecolor">new</span>
          </h1>
          <p className="nw-text">
            Find out about the latest news about our club.
          </p>
        </div>
        <div className="nw-url">
          <p>https://codepen.io/choogoor/pen/YWBxrg</p>
        </div>
        <div className="nw-images">
          <img className="nw-image" src={ New3 } alt="" />
          <img className="nw-image" src={ New2 } alt="" />
          <img className="nw-image" src={ New4 } alt="" />
          <img className="nw-image" src={ New1 } alt="" />
        </div>
        <div className="nw-more">
          <button className="nw-leter">FIND OUT MORE</button>
        </div>
        <div className="nw-vl"></div>
      </div>
    </div>
  );
};
