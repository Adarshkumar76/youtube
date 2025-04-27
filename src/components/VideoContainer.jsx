import React, { useEffect, useState } from "react";
import { YOUTUBE_API } from "../utils/constants.js";
import VideoCard from "./VideoCard.jsx";
import { Link } from "react-router";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_API);
    const json = await data.json();
    console.log(json.items);

    setVideos(json.items);
  };
  return (
    <div className="flex flex-wrap gap-1">
      {videos.map((video) => {
        return (
          <Link key={video.id} to={"/watch?v=" + video.id}>
            <VideoCard info={video} />
          </Link>
        );
      })}
    </div>
  );
};

export default VideoContainer;
