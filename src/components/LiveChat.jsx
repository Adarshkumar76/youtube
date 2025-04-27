import React, { useEffect } from "react";
import ChatMsg from "./ChatMsg";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, randomMessage } from "../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();
  const chatData = useSelector((store) => store.chat.message);
  useEffect(() => {
    const i = setInterval(() => {
      // API polling
      // const data = await fetch("https://api.example.com/chat");
      // const json = await data.json();

      dispatch(
        addMessage({
          name: generateRandomName(),
          msg: randomMessage(15),
        })
      );
    }, 1000);

    return () => {
      clearInterval(i);
    };
  }, []);
  return (
    <>
      <div className="shadow-lg p-2 m-2 rounded bg-slate-100">
        <div>
          {chatData.map((item, index) => {
            return <ChatMsg key={index} name={item.name} msg={item.msg} />;
          })}
        </div>
      </div>
    </>
  );
};

export default LiveChat;
