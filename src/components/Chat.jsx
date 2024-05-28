import { useEffect, useState } from "react";
import TextForm from "./TextForm";
import ChatSection from "./ChatSection";
import ChatHistory from "./ChatHistory";

export default function Chat() {
  const [chatSessions, setChatSessions] = useState(() => {
    const savedSessions = localStorage.getItem("chatSessions");
    return savedSessions
      ? JSON.parse(savedSessions)
      : [{ name: "Conversation 1", questions: [] }];
  });

  const [currentChatIndex, setCurrentChatIndex] = useState(0);

  useEffect(() => {
    localStorage.setItem("chatSessions", JSON.stringify(chatSessions));
  }, [chatSessions]);

  const currentChat = chatSessions[currentChatIndex];

  return (
    <div className="grid grid-cols-5 w-screen h-screen">
      <ChatHistory
        chatSessions={chatSessions}
        setChatSessions={setChatSessions}
        currentChatIndex={currentChatIndex}
        setCurrentChatIndex={setCurrentChatIndex}
      />
      <div className="bg-customPurple col-start-3 col-end-6 lg:col-start-2 lg:col-end-6 flex flex-col p-2 justify-end items-center relative">
        <h1 className="absolute top-0 left-0 m-8 font-black text-purple-200 text-4xl opacity-50">
          BotAI
        </h1>
        <ChatSection
          questions={currentChat.questions}
          setRatings={(index, newRating) => {
            const updatedQuestions = currentChat.questions.map((q, i) =>
              i === index ? { ...q, rating: newRating } : q
            );
            const updatedChats = chatSessions.map((chat, idx) =>
              idx === currentChatIndex
                ? { ...chat, questions: updatedQuestions }
                : chat
            );
            setChatSessions(updatedChats);
          }}
        />
        <TextForm
          questions={currentChat.questions}
          setQuestions={(newQuestions) => {
            const updatedChats = chatSessions.map((chat, index) =>
              index === currentChatIndex
                ? { ...chat, questions: newQuestions }
                : chat
            );
            setChatSessions(updatedChats);
          }}
        />
      </div>
    </div>
  );
}
