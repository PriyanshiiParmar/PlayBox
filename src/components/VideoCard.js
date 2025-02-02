const VideoCard = ({ info }) => {
  console.log(info);
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet; 

  return (
    <div className="p-2 m-2 rounded-xl w-full sm:w-[90%] md:w-[95%] lg:w-[95%] xl:w-[313px]">
      <img className="rounded-xl cursor-pointer w-full" alt="img" src={thumbnails.medium.url} />
      <ul className="w-full xl:text-sm lg:text-sm md:text-sm xs:text-sm text-lg">
        <li className="font-bold ">{title}</li>
        <li className="text-gray-700">{channelTitle}</li>
        <li className="text-gray-700" >{statistics?.viewCount} views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
