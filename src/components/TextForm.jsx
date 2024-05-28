/* eslint-disable react/prop-types */
import DATA from "../constants/mockData";
import { useEffect, useRef, useState } from "react";
import { CiPaperplane } from "react-icons/ci";

export default function TextForm({ setQuestions, questions }) {
  const [text, setText] = useState("");
  const textareaRef = useRef(null);

  const handleInput = (e) => {
    setText(e.target.value);
    textareaRef.current.style.height = "auto";
    textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const cleanedText = text.toLowerCase().trim().replace(/  +/g, " ");
    const ans = DATA.filter((x) => x.question.toLowerCase() === cleanedText);

    const newQuestions = [
      ...questions,
      { text, rating: 0 },
      {
        text:
          ans.length === 0
            ? "Sorry, I don't have an answer for that."
            : ans[0].response,
        rating: 0,
      },
    ];

    setQuestions(newQuestions);
    setText("");
  };

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [text]);

  return (
    <form
      action=""
      className="w-full flex justify-center p-2 sticky bottom-0 bg-customPurple"
      onSubmit={handleSubmit}
    >
      <div className="relative w-6/12">
        <textarea
          ref={textareaRef}
          value={text}
          onChange={handleInput}
          placeholder="Type your question..."
          className="mx-auto w-full py-4 pl-4 pr-16 border-none rounded-lg bg-purple-100 outline-none resize-none overflow-hidden"
          style={{ minHeight: "4rem" }}
        />
        <button type="submit" className="absolute top-1/4 right-5">
          <CiPaperplane className="w-8 h-8 text-customPurple" />
        </button>
      </div>
    </form>
  );
}
