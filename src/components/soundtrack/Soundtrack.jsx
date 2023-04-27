import Sound from "../../assets/sound.png";
import Soundtracks from "../../assets/soundtrack.png";

import "./sound.css";
import "./responsive-sound.css";

export const Soundtrack = () => {
  return (
    <div className="sd-background">
      <div className="sd-container">
        <div className="sd-images">
          <img className="sd-sound" src={ Sound } alt="" />
        </div>
        <div className="sd-images2">
          <img className="sd-image" src={ Soundtracks } alt="" />
        </div>
        <div classNameName="sd-title-container">
          <h1 className="sd-title">Newman</h1>
          <h1 className="sd-title2">Soundtrack</h1>
        </div>
      </div>
    </div>
  );
};
