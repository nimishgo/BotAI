/* eslint-disable react/prop-types */
import { FaUser } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";
import computerIcon from "../assets/AppIcon.png";
import StarRating from "./StarRating";
import MockUp from "./MockUp";

export default function ChatSection({ questions, setRatings }) {
  const handleRating = (index, rating) => {
    setRatings(index, rating);
  };

  return (
    <section className="w-8/12 my-8">
      {questions.length > 0 ? (
        <ul className="flex flex-col gap-4 w-full">
          {questions.map((x, index) => (
            <li
              key={uuidv4()}
              className={`flex flex-col p-4 w-fit rounded-lg ${
                index % 2 === 0 ? "self-end flex-row-reverse" : ""
              }`}
            >
              <div
                className={`flex items-center p-4 w-fit rounded-lg ${
                  index % 2 === 0 ? "self-end flex-row-reverse" : ""
                }`}
              >
                <div
                  className={`p-2 bg-slate-100 rounded-full m-2  ${
                    index % 2 == 0 ? "p-2" : "p-0"
                  }`}
                >
                  {index % 2 == 0 ? (
                    <FaUser className="text-2xl text-customPurple" />
                  ) : (
                    <img
                      src={computerIcon}
                      alt="ai icon"
                      className="w-12 h-12 bg-customPurple"
                    />
                  )}
                </div>
                <div
                  className={`p-4 text-wrap break-words bg-purple-200 w-fit max-w-screen-md rounded-lg ${
                    index % 2 === 0 ? "self-end" : ""
                  }`}
                >
                  {x.text}
                </div>
              </div>
              {index % 2 == 1 && (
                <StarRating
                  rating={x.rating || 0}
                  onRating={(rating) => handleRating(index, rating)}
                />
              )}
            </li>
          ))}
        </ul>
      ) : (
        <MockUp />
      )}
    </section>
  );
}
