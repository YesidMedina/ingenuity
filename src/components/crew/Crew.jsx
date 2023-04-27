import Church from '../../assets/church.png';
import { Counter } from "../counter/Counter";

import "./crew.css";
import "./responsive-crew.css";

export const Crew = () => {
  return (
    <div className="cw-crew">
      <div className="cw-table">
        <div className="cw-container">
          <h1 className="cw-title">
            The <span className="cw-titlecolor">crew.</span>
          </h1>
          <p className="cw-text">
            THe catholic community at trinity participates in tyhe sacramental
            life of the church and serves actively as a partner in community
            building and interreligious dialogue to promote understanding and
            tolerence on compus. <br /> <br /> Roman catholic campus ministry is
            sponsored by the Archdiocese of Hartford Campus ministry Office and
            trinity collage's office of spiritual and religious life, It brings
            a vitally important dimension to life at trinity collage.
          </p>
          <button className="cw-more">LEARN MORE</button>
        </div>

        <div className="cw-sobreimage">
          <img className="cw-image"  />
        </div>
      </div>
      <div>
        <Counter />
      </div>
      <div className="cw-vl"></div>
      
    </div>
  );
};
