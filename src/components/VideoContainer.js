import { useEffect, useState } from "react";
import { youtubeVideoAPI } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
    const [videos, setVideos] = useState([]); 
  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(youtubeVideoAPI);
    const json = await data.json();
    setVideos(json.items)
    // console.log(json.items)
  };

  return <div className="flex flex-wrap w-[100%]">
    {
      videos.map((video)=>
        <Link key={video.id}  to={"watch?v=" + video.id}>
        <VideoCard info={video}/>
       </Link>
      )
    }
  </div>;
};
export default VideoContainer;
