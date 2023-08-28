import React from "react";

const ReciviedMessageCard = () => {
  return (
    <div className="flex w-full justify-start items-center">
      <div className="bg-yellow-200 px-2 py-2 rounded-md flex flex-col gap-1">
        <div className="block max-w-[20rem]">
          <img
            src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60"
            alt=""
          />
        </div>
        <p className="whitespace-normal ">this is a message that is recived.</p>
        <div className="flex justify-end items-center">
          <span className="text-xs">11:00 am</span>
        </div>
      </div>
    </div>
  );
};

export default ReciviedMessageCard;
