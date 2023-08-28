import React from "react";
import { BsFillPersonFill } from "react-icons/bs";

const ChatCard = () => {
  return (
    <div className="w-full h-14">
      <div className="flex gap-3 px-2 py-2">
        <div className="flex">
          <div className="bg-gray-500 rounded-full p-1 text-gray-700">
            <BsFillPersonFill size={30} />
          </div>
        </div>
        <div className="flex flex-col ">
          <h4 className="text-sm font-bold capitalize  text-gray-200">
            sandeep
          </h4>
          <p className="text-xs  text-gray-400">This is the last message</p>
        </div>
      </div>
    </div>
  );
};

export default ChatCard;
