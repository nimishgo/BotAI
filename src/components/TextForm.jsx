import { useEffect, useRef, useState } from "react";
import { CiPaperplane } from "react-icons/ci";

export default function TextForm() {
  const [text, setText] = useState("");
  const textareaRef = useRef(null);

  const handleInput = (e) => {
    setText(e.target.value);
    textareaRef.current.style.height = "auto";
    textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
  };

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [text]);
  return (
    <>
      <form action="" className="w-full flex justify-center p-2">
        <div className="relative w-6/12">
          <textarea
            ref={textareaRef}
            value={text}
            onChange={handleInput}
            placeholder="type your question..."
            className="mx-auto w-full py-4 pl-4 pr-16 border-none rounded-lg break-all bg-purple-100 outline-none resize-none overflow-hidden"
            style={{ minHeight: "4rem" }}
          />
          <button type="submit" className="absolute top-1/4 right-5">
            <CiPaperplane className="w-8 h-8 text-customPurple" />
          </button>
        </div>
      </form>
    </>
  );
}
