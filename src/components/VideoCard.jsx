import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { title, channelTitle, thumbnails } = snippet;
  const { viewCount, likeCount } = statistics;

  function formatNumber(num) {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + "M";
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + "K";
    } else {
      return num.toString();
    }
  };

  return (
    <div className="p-2 m-2 w-[430px] rounded-lg">
      <img className="rounded-lg" src={thumbnails.high.url} alt="thumbnail" />
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li>{channelTitle}</li>
        <li>
          {formatNumber(viewCount)} views - {formatNumber(likeCount)} likes
        </li>
      </ul>
    </div>
  );
};

export default VideoCard;
