import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const WatchVideoDetails = ({ id }) => {
  const apiKey = process.env.REACT_APP_API_KEY;
  const videoDetailsAPI =
    "https://www.googleapis.com/youtube/v3/videos?part=snippet&id=" +
    id +
    "&key="+apiKey;

  const channelAPI =
    "https://www.googleapis.com/youtube/v3/videos?part=statistics&id=" +
    id +
    "&key="+apiKey;

  useEffect(() => {
    getVideoDetails();
    getChannelDetails();
  }, []);

  const [videoData, setVideoData] = useState(null);
  const [channelData, setChannelData] = useState(null);
  const getVideoDetails = async () => {
    const data = await fetch(videoDetailsAPI);
    const json = await data.json();
    console.log("vdo", json);
    setVideoData(json);
  };

  const getChannelDetails = async () => {
    const data = await fetch(channelAPI);
    const json = await data.json();
    // console.log("channel", json.items[0].statistics);
    setChannelData(json);
  };
  if (videoData === null || channelData === null) {
    return <Shimmer />;
  }

  const { title, channelTitle } = videoData?.items[0]?.snippet;
  const logoUrl = videoData.items[0]?.snippet?.thumbnails?.default?.url;
  const { commentCount, likeCount, viewCount } =
    channelData?.items[0]?.statistics;
  const formatLikes = (likeCount) => {
    if (likeCount < 1000) {
      return likeCount;
    } else if (likeCount >= 1000 && likeCount < 10000) {
      return (likeCount / 1000).toFixed(1) + "K"; // Return in K format for values between 1000 and 9999
    } else if (likeCount >= 10000) {
      return (likeCount / 1000).toFixed(1) + "K";
    }
  };
  return (
    <div>
      {title ? (
        <div className="w-[63%]">
          <h1 className="font-bold text-lg mt-2">{title}</h1>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              {logoUrl && (
                <img
                  src={logoUrl}
                  alt="Channel Logo"
                  className="h-10 w-10 cursor-pointer rounded-full mr-2"
                />
              )}
              <div className="flex flex-col">
                <h2 className="font-bold cursor-pointer">{channelTitle}</h2>
                <p className="font-bold text-sm">{formatLikes(viewCount)}</p>
              </div>

              <button className="bg-gray-300 text-black font-bold py-2 px-4 rounded-full flex items-center hover:bg-gray-400 transition duration-200 mx-5">
                Subscribe
              </button>
            </div>
            <div className="flex">
              <div className="flex items-center bg-gray-300 text-black font-bold px-2 py-1 rounded-full m-2">
                <img
                  className="h-5 cursor-pointer mr-1"
                  alt=""
                  src="https://cdn-icons-png.flaticon.com/512/2415/2415418.png"
                />
                <p className="font-bold">{formatLikes(likeCount)}</p>
              </div>
              <button className=" bg-gray-300 text-black font-bold px-2 py-2 rounded-full m-2">
                Share
              </button>
              <button className=" bg-gray-300 text-black font-bold px-2 py-1 rounded-full m-2">
                Download
              </button>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading video details...</p>
      )}
    </div>
  );
};
export default WatchVideoDetails;
