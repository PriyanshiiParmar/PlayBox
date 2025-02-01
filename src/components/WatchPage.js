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
    <div className="ml-32">
  <div className="flex w-full">
    <div>
      <iframe
        width="900"
        height="505"
        src={"https://www.youtube.com/embed/" + id}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
        className="rounded-2xl"
      ></iframe>
    </div>
    <div className="w-full">  {/* Allow LiveChat to take remaining space */}
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
