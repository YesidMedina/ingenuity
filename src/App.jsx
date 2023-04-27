import { Crew } from "./components/crew/Crew";
import { Event } from "./components/event/Event";
import { Joinus } from "./components/join-us/Joinus";
import { Memories } from "./components/memories/Memories";
import { New } from "./components/new/New";
import { Soundtrack } from "./components/soundtrack/Soundtrack";
import { Video } from "./components/video/Video";
import { Footer } from "./footer/Footer";
import { Navbar } from "./navbar/Navbar";

export const App = () => {
  return (
    <>
      <Navbar />
      <div className="">
        <Video />
      </div>
      <div className="" >
        <Event />
      </div>
      <div>
        <Crew />
      </div>
      <div>
        <New />
      </div>
      <div>
        <Memories />
      </div>
      <div>
        <Soundtrack />
      </div>
      <div>
        <Joinus />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};
