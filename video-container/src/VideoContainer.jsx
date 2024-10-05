import React, { useState } from "react";
import Videodata from "./video.json";
import Player from "./Player";
import VideoItem from "./VideoItem";
const VideoContainer = () => {
  let [state, setState] = useState(Videodata);
  console.log(state);

  let [video, setVideo] = useState(
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
  );
  let [title, setTitle] = useState("Big Buck Bunny");
  return (
    <section className="videoBlock">
      <aside className="left">
        <Player data={{ state, video, title }} />
      </aside>
      <aside className="right">
        {state.map((value) => {
          return (
            <VideoItem key={value.id} data={{ value, setVideo, setTitle }} />
          );
        })}
      </aside>
    </section>
  );
};

export default VideoContainer;
