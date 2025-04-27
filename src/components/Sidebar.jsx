import React from "react";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  // Early return if the menu is closed
  if (!isMenuOpen) {
    return null;
  }
  // If the menu is open, render the sidebar
  return (
    <div className="col-span-2 shadow-sm h-auto p-3 ">
      <ul className="flex flex-col gap-3 m-5">
        <li>Home</li>
        <li>Shorts</li>
        <li>Subscriptions</li>
      </ul>
      <h1 className="font-bold text-lg m-5">You</h1>
      <ul className="flex flex-col gap-3 m-5">
        <li>History</li>
        <li>Playlists</li>
        <li>Your Videos</li>
        <li>Your Courses</li>
        <li>Watch Later</li>
        <li>Liked Videos</li>
      </ul>
      <h1 className="font-bold text-lg m-5">Explore</h1>
      <ul className="flex flex-col gap-3 m-5">
        <li>Trending</li>
        <li>Shopping</li>
        <li>Music</li>
        <li>Films</li>
        <li>Live</li>
        <li>Gaming</li>
      </ul>
    </div>
  );
};

export default Sidebar;
