import Button from "./Button";

const ButtonList = () => {
  const list = [
    "Music", "T-series", "Indian Pop Music", "Mantras", "Live", "Mixes",
    "Dubbing", "Gaming", "News", "Sports", "Movies", "TV Shows", "Books",
    // "Podcasts", "Recently Uploaded", "New to you", "Technology", "Comedy", "Trending"
  ];

  return (
    <div className="overflow-x-scroll w-[100%] py-2 hidden xl:flex lg:flex">
      {list.map((listItem, index) => (
        <Button name={listItem} key={index} />
      ))}
    </div>
  );
};

export default ButtonList;
