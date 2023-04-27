import Event1 from "../../assets/event.svg";
import Event2 from "../../assets/event2.jpg";
import Event3 from "../../assets/event3.jpg";
import Event4 from "../../assets/event4.jpg";
import Event5 from "../../assets/event5.jpg";
import "./event.css";
import "./responsive-event.css";

export const Event = () => {
  return (
    <div className="ev-container">
      <div className="">
        <div className="ev-logo">
          <a>
            <img className="ev-logo1 " src={ Event1 } alt="" />
          </a>
          <h1 className="ev-title">Events</h1>
        </div>
      </div>
      <div>
        <div>
          <div className="ev-images">
            <img className="ev-formImages" src={ Event2 } alt="" />
            <img className=" ev-formImages" src={ Event3 } alt="" />
            <img className=" ev-formImages" src={ Event4 } alt="" />
            <img className=" ev-formImages1" src={ Event5 } alt="" />
          </div>
        </div>
        <div className="ev-more">
          <button type="button" className="ev-button">
            MORE EVENTS
          </button>
        </div>
        <div className="ev-paragraph">
          <p className="ev-p">
            Let's have fun, join us in our events. Find out more here.
          </p>
        </div>
        <div className="ev-vl"></div>
      </div>
    </div>
  );
};
