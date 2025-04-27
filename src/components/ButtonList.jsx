import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const List = [
    "All",
    "Music",
    "Gaming",
    "News",
    "Live",
    "Sports",
    "Movies",
    "Fashion & Beauty",
    "Learning",
    "Entertainment",
    "Science & Technology",
    "Comedy",
 
  ];
  return (
    <div className=" overflow-hidden">
      <div className="flex w-max">
        {List.map((name) => {
          return <Button name={name} key={name} />;
        })}
      </div>
    </div>
  );
};

export default ButtonList;
