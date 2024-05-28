/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import computerIcon from "../assets/AppIcon.png";
import { FcOpenedFolder } from "react-icons/fc";

export default function ChatHistory({
  chatSessions,
  setChatSessions,
  setCurrentChatIndex,
}) {
  const createNewChat = () => {
    const newChat = {
      name: `Conversation ${chatSessions.length + 1}`,
      questions: [],
      rating: [],
    };
    setChatSessions([...chatSessions, newChat]);
    setCurrentChatIndex(chatSessions.length); // Switch to the new chat
  };

  const deleteChat = (index) => {
    const updatedChats = chatSessions.filter((_, i) => i !== index);
    setChatSessions(updatedChats);
    setCurrentChatIndex(0); // Switch to the first chat if any, otherwise no chat
  };

  const renameChat = (index, newName) => {
    const updatedChats = chatSessions.map((chat, i) =>
      i === index ? { ...chat, name: newName } : chat
    );
    setChatSessions(updatedChats);
  };

  return (
    <div className="bg-white text-center col-start-1 col-end-2">
      <button
        onClick={createNewChat}
        className="m-4 text-xl flex justify-between items-center w-9/12 mx-auto"
      >
        <div className="flex items-center">
          <img src={computerIcon} alt="" className="w-16 h-16 mx-4" />
          New Chat
        </div>
        <FaEdit />
      </button>
      {chatSessions.map((chat, index) => (
        <div
          key={index}
          className="flex items-center justify-center bg-purple-200 shadow-xl w-fit mx-auto p-2 rounded-lg my-3"
        >
          <input
            type="text"
            value={chat.name}
            onChange={(e) => renameChat(index, e.target.value)}
            className="text-lg bg-purple-200"
          />
          <button
            onClick={() => setCurrentChatIndex(index)}
            className="self-end"
          >
            <FcOpenedFolder className="text-xl m-1" />
          </button>
          {chatSessions.length > 1 && (
            <button onClick={() => deleteChat(index)} className="self-end">
              <MdDelete className="text-xl m-1" />
            </button>
          )}
        </div>
      ))}
    </div>
  );
}
