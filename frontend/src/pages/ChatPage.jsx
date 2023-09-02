import React from "react";
import { useGetChatQuery, useGetChatsQuery } from "../redux/service/api";
import { AiOutlineSearch } from "react-icons/ai";
import ChatCard from "../components/chats/ChatCard";
import ReciviedMessageCard from "../components/messages/ReciviedMessageCard";
import SendedMessageCard from "../components/messages/SendedMessageCard";
import { BsEmojiSmile } from "react-icons/bs";
import { TiAttachment } from "react-icons/ti";
import { IoIosSend } from "react-icons/io";

const ChatPage = () => {
  const { data, error, isFetching, isLoading, isSuccess } = useGetChatsQuery();
  const [messages, setMessages] = React.useState([]);
  return (
    <div>
      <div className="px-5 py-5 bg-gray-800 shadow-md">
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
              {data?.map((chat) => (
                <ChatCard key={chat?._id} {...chat} />
              ))}
            </div>
          </div>
          <div className="md:col-span-2 hidden md:block ">
            <div>
              <div className="max-h-[78.6vh] min-h-[78.6vh] overflow-y-auto bg-gray-900 px-2 py-2 flex flex-col gap-4">
                {!messages.length ? (
                  Array.from({length:100}).map((i, index) => (
                    <>
                      <ReciviedMessageCard key={`a${index}`} />
                      <SendedMessageCard key={`${index}index`} />
                    </>
                  ))
                ) : (
                  <div className="max-h-[75.6vh] min-h-[75.6vh] flex justify-center items-center text-gray-300">
                    Select a chat to start messaging
                  </div>
                )}
              </div>
              <div className="max-h-[10vh] min-h-[10vh] flex text-gray-300 py-2">
                <div className="flex px-5 py-3 items-center gap-5">
                  <BsEmojiSmile size={22} className="cursor-pointer" />
                  <TiAttachment size={30} className="cursor-pointer" />
                </div>
                <div className=" w-full flex">
                  <input
                    className="block w-full bg-transparent border-b-2 focus:border-none px-3 border-gray-500"
                    placeholder="Type somthing . . . ."
                  />
                </div>
                <div className="flex px-8">
                  <button className=" text-blue-500  shadow-sm">
                    <IoIosSend size={38} className="" />
                  </button>
                </div>
              </div>
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

// export const ChatDetails = ({ id }) => {
//   const data = useGetChatQuery(id);
//   return <pre>{JSON.stringify(data, undefined, 2).substring(0, 20)}</pre>;
// };

export default ChatPage;
