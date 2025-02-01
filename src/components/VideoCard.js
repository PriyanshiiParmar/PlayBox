const VideoCard = ({ info }) => {
  console.log(info);
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet; 
  return <div className="p-2 m-2 rounded-xl w-80 ">
    <img className="rounded-xl cursor-pointer" alt="img" src={thumbnails.medium.url}/>
    <ul>
        <li className="font-bold text-sm">{title}</li>
        <li className="text-gray-700 text-sm">{channelTitle}</li>
        <li className="text-gray-700 text-sm">{statistics?.viewCount} views</li>
    </ul>
  </div>;
};
export default VideoCard;
