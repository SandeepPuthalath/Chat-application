import React from "react";
import { useGetChatQuery, useGetChatsQuery } from "../redux/service/api";
import { AiOutlineSearch } from "react-icons/ai";
import ChatCard from "../components/chats/ChatCard";

const ChatPage = () => {
  const { data, error, isFetching, isLoading, isSuccess } = useGetChatsQuery();
  return (
    <div>
      <div className="px-5 py-5 bg-gray-700 shadow-md">
        <div className="text-gray-400 flex items-center justify-between">
          <h3 className="text-2xl font-bold capitalize">mingle</h3>
          <div>
            <AiOutlineSearch size={30}/>
          </div>
        </div>
      </div>
      <div className="">
        <div className="grid md:grid-cols-3">
          <div className="md:col-span-1">
            <div className="max-h-[88.6vh] min-h-[88.6vh] overflow-y-auto px-2 py-2">
               {
                Array.from({length:100}).map((i, index) => <ChatCard key={index}/>)
               }
            </div>
          </div>
          <div className="md:col-span-2 hidden md:visible">how are you</div>
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
