import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router";
import CommentContainer from "./CommentContainer";
import LiveChat from "./LiveChat";
import { addMessage } from "../utils/chatSlice";

const WatchPage = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const [params] = useSearchParams();
  const videoId = params.get("v");
  console.log(videoId);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
    <>
      {/* <div className="grid grid-flow-col px-30 py-7 gap-6"> */}
      <div className="grid-cols-7 pl-30 py-7">
        <div className="flex align-center justify-center">
          <iframe
            className="rounded-lg"
            width="850"
            height="500"
            src={"https://www.youtube.com/embed/" + videoId}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <CommentContainer />
      </div>
      <div className="grid-cols-5 py-7 gap-6 max-h-1/2 overflow-scroll">
        <h1 className="px-2 font-bold">Live Chats</h1>
        <form className="flex gap-2 m-2 p-2" onSubmit={(e)=>{
          e.preventDefault();
          dispatch(addMessage({
            name: "Adarsh",
            msg: liveMessage,
          }))
          setLiveMessage("");
        }}>
          <input
            type="text"
            placeholder="Send Message"
            value={liveMessage}
            onChange={(e) => setLiveMessage(e.target.value)}
            className="p-2 border rounded "
          />
          <button className="cursor-pointer">Send</button>
        </form>
        <div className="max-h-[400px] overflow-y-scroll ">
          <LiveChat />
        </div>
        <div>
          <h1 className="text-2xl p-2">Related Videos</h1>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default WatchPage;
