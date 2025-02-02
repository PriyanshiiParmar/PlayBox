import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import store from "../utils/store";
import { addMessage } from "../utils/chatSlice";
import ChatMessage from "./ChatMessage";
import { generateRandomNames, generateRandomText } from "../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();
  const [liveMessage, setLiveMessage] = useState("");
  const messages = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const timer = setInterval(() => {
      // console.log("API Polled");
      dispatch(
        addMessage({
          name: generateRandomNames(),
          text: generateRandomText(20),
        })
      );
    }, 1500);
    return () => clearInterval(timer);
  }, []);
  return (
    <div className="mx-3 my-3 xl:my-0 rounded-xl shadow-2xl border border-gray-400 hidden xl:block lg:block">
      <div className="mx-3 rounded-xl shadow-2xl p-2 overflow-y-scroll  xl:h-[505px] lg:h-[440px] flex flex-col-reverse bg-slate-100">
        {messages.map((c, index) => (
          <ChatMessage key={index} name={c.name} text={c.text} />
        ))}
      </div>
      <form
        className="border border-gray-100 mx-4 my-1 bg-slate-100 rounded-md"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(addMessage({
            name:"Priyanshi Parmar",
            text:liveMessage
          }))
          setLiveMessage("")
          // console.log("hello");
        }}
      >
        <input
          onChange={(e) => setLiveMessage(e.target.value)}
          className="m-1 p-1 bg-slate-200 w-[70%] rounded-lg"
          placeholder="Enter your message"
          value={liveMessage}
          type="text"
        />
        <button className="m-1 p-1 bg-slate-200 w-[20%] rounded-lg hover:bg-slate-300">
          Send
        </button>
      </form>
    </div>
  );
};
export default LiveChat;
