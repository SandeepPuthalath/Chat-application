import React from "react";
import { useLoaderData } from "react-router-dom";

const ChatPage = () => {
  const chat = useLoaderData().data;
  return (
    <div>
      {chat.map((c) => (
        <div key={c?._id}>{c?.chatName}</div>
      ))}
    </div>
  );
};

export default ChatPage;
