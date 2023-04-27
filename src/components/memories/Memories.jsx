import Logo from "../../assets/event.svg";
import Memory from "../../assets/memory.png";
import Memory1 from "../../assets/memory1.png";
import Memory2 from "../../assets/memory2.png";
import Memory3 from "../../assets/memory3.png";
import Memory4 from "../../assets/memory4.png";
import Church from "../../assets/church.png";

import "./memories.css";
import "./responsive-memory.css";

export const Memories = () => {
  return (
    <div className="my-enter">
      <div className="my-container">
        <div className="my-">
          <img className="my-logo" src={ Logo } alt="" />
          <h1 className="my-title">Memories</h1>
        </div>
        <div className="my-images">
          <img className="my-image" src={ Memory3 } alt="" />
          <img className="my-image1" src={ Memory2 } alt="" />
          <img className="my-image" src={ Memory4 } alt="" />
        </div>
        <div className="my-images2">
          <img className="my-image2" src={ Memory1 } alt="" />
          <img className="my-image3" src={ Memory } alt="" />
          <img className="my-image4" src={ Church } alt="" />
        </div>

        <div className="my-more">
          <button>MORE MEMORIES</button>
        </div>
      </div>
    </div>
  );
};
