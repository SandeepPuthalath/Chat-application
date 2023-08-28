import React from "react";
import { useGetChatQuery, useGetChatsQuery } from "../redux/service/api";
import { AiOutlineSearch } from "react-icons/ai";
import ChatCard from "../components/chats/ChatCard";
import ReciviedMessageCard from "../components/messages/ReciviedMessageCard";
import SendedMessageCard from "../components/messages/SendedMessageCard";

const ChatPage = () => {
  const { data, error, isFetching, isLoading, isSuccess } = useGetChatsQuery();
  return (
    <div>
      <div className="px-5 py-5 bg-gray-700 shadow-md">
        <div className="text-gray-400 flex items-center justify-between">
          <h3 className="text-2xl font-bold capitalize">mingle</h3>
          <div>
            <AiOutlineSearch size={30} />
          </div>
        </div>
      </div>
      <div className="">
        <div className="grid md:grid-cols-3">
          <div className="md:col-span-1">
            <div className="max-h-[88.6vh] min-h-[88.6vh] overflow-y-auto">
              {Array.from({ length: 100 }).map((i, index) => (
                <ChatCard key={index} />
              ))}
            </div>
          </div>
          <div className="relative md:col-span-2 hidden md:block ">
            <div>
              <div className="max-h-[80.6vh] min-h-[80.6vh] overflow-y-auto bg-gray-300 px-5 py-5 flex flex-col gap-4">
                {Array.from({ length: 20 }).map((i, index) => (
                  <>
                    <ReciviedMessageCard key={`a${index}`}/>
                    <SendedMessageCard key={`${index}index`}/>
                  </>
                ))}
              </div>
              <div className="max-h-[8vh] min-h-[8vh]">hellow</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

//  chats;
//  {
//    isLoading && <h2>loading...</h2>;
//  }
//  {
//    isFetching && <h2>fetching...</h2>;
//  }
//  {
//    error && <h2>somthing went wrong</h2>;
//  }
//  {
//    isSuccess &&
//      data?.map((chat) => (
//        <div key={chat?._id}>
//          <h1 className="text-xl">{chat?.chatName}</h1>
//          <ChatDetails id={chat?._id} />
//        </div>
//      ));
//  }

export const ChatDetails = ({ id }) => {
  const data = useGetChatQuery(id);
  return <pre>{JSON.stringify(data, undefined, 2).substring(0, 20)}</pre>;
};

export default ChatPage;
