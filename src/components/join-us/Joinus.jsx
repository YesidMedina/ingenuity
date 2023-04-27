import Cristi from "../../assets/cristi.png";

import "./join.css";
import "./responsive-join.css";

export const Joinus = () => {
  return (
    <div className="jn-crew">
      <div className="jn-table">
        <div className="jn-container">
          <h1 className="jn-title">
            Join <span className="jn-titlecolor">us.</span>
          </h1>
          <p className="jn-text">
            In the sea of life, there is nothing to fear if you have God as your
            captain. Join our crew!
          </p>
          <form>
            <input className="jn-input" type="text" placeholder="Full Name" />
            <input
              className="jn-input"
              type="email"
              placeholder="Email Address"
            />
            <input
              className="jn-input"
              type="tel"
              placeholder="Cell Phone Number"
            />
            <input
              className="jn-input-text"
              type="text"
              placeholder="Message"
            />
            <button className="jn-more">JOIN US</button>
          </form>
        </div>

        <div className="jn-sobreimage">
          <img className="jn-image" src={ Cristi } alt="" />
        </div>
      </div>
    </div>
  );
};
