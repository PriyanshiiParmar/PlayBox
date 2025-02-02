import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommnetsContainer";
import WatchVideoDetails from "./WatchVideoDetails";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("v");
  console.log(id);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div className="w-screen">
    <div className="xl:ml-32 lg:m-8 m-4">
  <div className="xl:flex lg:flex w-full">
    <div>
      <iframe
        src={"https://www.youtube.com/embed/" + id}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
        className="rounded-2xl xl:h-[505px] xl:w-[900px] lg:h-[500px] lg:w-[750px] h-[500px] w-full"
      ></iframe>
    </div>
    <div className="w-full">  
    <LiveChat />
    </div>
  </div>

  <WatchVideoDetails id={id} />
  <CommentsContainer />
</div>

    </div>
  );
};
export default WatchPage;
