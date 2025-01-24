import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Head = () => {
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col ">
      <div className="flex col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-10 w-10 mt-3 ml-2 cursor-pointer"
          alt="sidebar-logo"
          src="https://banner2.cleanpng.com/20180628/zaz/aayj9bx5v.webp"
        />
        <img
          className="h-16"
          alt="youtube-logo"
          src="https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500"
        />
      </div>
      <div className="col-span-10 m-2 flex justify-center ">
        <div className="w-1/2">
          <input
            type="text"
            className="w-full p-3  rounded-l-full border border-gray-300 focus:outline-none "
            placeholder="Search"
          />
        </div>
        <button className=" px-3 bg-gray-300 py-1 text-white border border-gray-300   rounded-r-full">
          🔍
        </button>
      </div>
      <div className="col-span-1">
        <img
          className="h-6 w-6 mt-6"
          alt="user-logo"
          src="https://cdn-icons-png.freepik.com/256/1077/1077114.png?semt=ais_hybrid"
        />
      </div>
    </div>
  );
};
export default Head;
