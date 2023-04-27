import Video1 from "../../assets/Final2.mp4";
import Logo2 from "../../assets/logo2.svg";
import Message from "../../assets/mensaje.svg";

import "./style.css";
import "./responsive-video.css";

export const Video = () => {
  return (
    <>
      <div className="vid-container">
        <div className="vid-video">
          <video controls>
            <source class="vid-player" src={ Video1 } type="" />
          </video>
        </div>
        <div class="vid-logo">
          <img className="" src={ Logo2 } alt="" />
        </div>
        <div class="vid-message">
          <button className="vid-icon">
            <img src={ Message } alt="" />
          </button>
        </div>
        <div class="vid-join">
          <button className="vid-leter">JOIN US</button>
          <div class="vid-heart"></div>
        </div>
        <div class="vid-vl"></div>
      </div>
    </>
  );
};
