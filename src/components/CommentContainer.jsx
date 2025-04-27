import React from "react";

const commentData = [
  {
    name: "John Doe",
    comment: "This is a great post!",
    date: "2023-10-01",
    replies: [],
  },
  {
    name: "harsh",
    comment: "This is a great post!",
    date: "2023-10-01",
    replies: [
      {
        name: "John Doe",
        comment: "This is a great post!",
        date: "2023-10-01",
        replies: [],
      },
      {
        name: "John Doe",
        comment: "This is a great post!",
        date: "2023-10-01",
        replies: [
          {
            name: "John Doe",
            comment: "This is a great post!",
            date: "2023-10-01",
            replies: [
              {
                name: "John Doe",
                comment: "This is a great post!",
                date: "2023-10-01",
                replies: [],
              },
              {
                name: "John Doe",
                comment: "This is a great post!",
                date: "2023-10-01",
                replies: [
                  {
                    name: "John Doe",
                    comment: "This is a great post!",
                    date: "2023-10-01",
                    replies: [],
                  },
                ],
              },
            ],
          },
          {
            name: "John Doe",
            comment: "This is a great post!",
            date: "2023-10-01",
            replies: [],
          },
        ],
      },
      {
        name: "John Doe",
        comment: "This is a great post!",
        date: "2023-10-01",
        replies: [],
      },
    ],
  },
  {
    name: "kumar",
    comment: "This is a great post!",
    date: "2023-10-01",
    replies: [],
  },
  {
    name: "sharma",
    comment: "This is a great post!",
    date: "2023-10-01",
    replies: [],
  },
  {
    name: "John Doe",
    comment: "This is a great post!",
    date: "2023-10-01",
    replies: [],
  },
  {
    name: "John Doe",
    comment: "This is a great post!",
    date: "2023-10-01",
    replies: [],
  },
];

const Comment = ({ data }) => {
  const { name, comment, date, replies } = data;
  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md">
      <div className="flex flex-row gap-2 ">
        <img
          className="h-12 w-12 rounded-full"
          src="https://www.pngall.com/wp-content/uploads/5/Profile-Male-PNG.png"
          alt="img"
        />
        <div>
          <div className="flex gap-2">
            <h1 className="text-lg font-bold">{name}</h1>
            <p className="text-sm text-gray-500">{date}</p>
          </div>
          <p>{comment}</p>
        </div>
      </div>
      {replies.length > 0 && (
        <div className="ml-7 mt-2 border-l-1 p-2 m-2 ">
          {replies.map((reply, index) => (
            <Comment key={index} data={reply} />
          ))}
        </div>
      )}
    </div>
  );
};

const CommentContainer = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold">Comments: </h1>
      <div className="flex flex-col gap-4 mt-4">
        {commentData.map((comment, index) => (
          <Comment key={index} data={comment} />
        ))}
      </div>
    </div>
  );
};

export default CommentContainer;
