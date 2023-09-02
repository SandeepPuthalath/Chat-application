import React from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const ChatCard = ({chatName}) => {
  return (
    <Link>
      <div className="w-full h-16 hover:bg-gray-700">
        <div className="flex items-center gap-3 px-2 py-2 ">
          <div className="flex">
            <div className="bg-gray-500 rounded-full p-2 text-gray-700">
              <BsFillPersonFill size={30} />
            </div>
          </div>
          <div className="flex flex-col w-full">
            <div className="flex justify-between items-center">
              <h4 className="text-sm font-bold capitalize  text-gray-200">
                {chatName}
              </h4>
              <h5 className="text-xs text-gray-200">11:00 am</h5>
            </div>
            <p className="text-xs  text-gray-400">This is the last message</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ChatCard;
