import Happy from "../../assets/facehappy.svg";
import Counter1 from "../../assets/counter1.svg";
import Counter2 from "../../assets/counter2.svg";

import "./counter.css";
import './responsive-counter.css'

export const Counter = () => {
  return (
    <div className="cn-container">
      <div className="cn-spacing">
        <img className="cn-happy" src={ Happy } alt="" />
        <p className="cn-number">165</p>
        <p className="cn-text">Happy freshman members</p>
        <p className="cn-vl"></p>
      </div>
      <div className="cn-spacing">
        <img className="cn-counter" src={ Counter1 } alt="" />
        <p className="cn-number">13</p>
        <p className="cn-text1">Wise senior members</p>
        <p className="cn-vl1"></p>
      </div>
      <div className="cn-spacing">
        <img className="cn-counter2" src={ Counter2 } alt="" />
        <p className="cn-number">173</p>
        <p className="cn-text">The whole crew</p>
      </div>
    </div>
  );
};
