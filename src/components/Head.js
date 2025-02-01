import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { useEffect, useState } from "react";
import { youtubeSearchAPI } from "../utils/constants";
import { cacheResult } from "../utils/searchSlice";

const Head = () => {
  const dispatch = useDispatch();

  const [searchQuery, setSearchQuery] = useState("");

  const [searchSuggestions, setSearchSuggestions] = useState([]);

  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search);

  useEffect(() => {
    //making api call with every key stroke but decline if the diff bt 2 api calls < 200ms
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSearchSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    console.log("Api call", searchQuery);
    const data = await fetch(youtubeSearchAPI + searchQuery);
    const json = await data.json();
    setSearchSuggestions(json[1]);
    // console.log(json[1]);
    dispatch(cacheResult({ [searchQuery]: json[1] }));
  };
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
      <div>
        <div className="relative col-span-10 m-2 flex justify-center ">
          <div className="w-full">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full p-3  rounded-l-full border border-gray-300 focus:outline-none "
              placeholder="Search"
              onFocus={() => setShowSuggestions(true)}
              onBlur={() => setShowSuggestions(false)}
            />
          </div>
          <button className=" px-3 bg-gray-300 py-1 text-white border border-gray-300   rounded-r-full">
            🔍
          </button>
        </div>
        {showSuggestions && (
          <div className="absolute  ml-8 px-2  rounded-xl bg-white w-[35%] border border-gray-100 ">
            {searchSuggestions.map((suggestion, index) => (
              <ul key={index} className="font-bold p-1 ">
                <li className="mr-2">🔍 {suggestion}</li>
              </ul>
            ))}
          </div>
        )}
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
