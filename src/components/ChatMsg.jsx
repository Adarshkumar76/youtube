import React from "react";

const ChatMsg = ({ name, msg }) => {
  return (
    <div className="flex flex-wrap items-center gap-2 p-2 w-full">
      <img
        className="h-6"
        src="https://www.pngmart.com/files/23/Profile-PNG-Photo.png"
        alt="profile"
      />
      <h2 className="font-bold">{name}</h2>
      <div className="">
        <p className=" text-wrap">{msg}</p>
      </div>
    </div>
  );
};

export default ChatMsg;
