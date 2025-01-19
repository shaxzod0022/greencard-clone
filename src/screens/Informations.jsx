import React, { useState } from "react";
import { style } from "../util/style";
import { informations } from "../util/constants";
import { useSelector } from "react-redux";

const Informations = () => {
  const [isOpen, setIsOpen] = useState(null);

  const toggleMenu = (id) => {
    setIsOpen((prevId) => (prevId === id ? null : id));
  };

  const lang = useSelector((i) => i.language);
  return (
    <div
      className={`${style.flexCol} sm:gap-4 gap-2 !items-start w-full lg:px-[120px] md:px-[80px] sm:px-[50px] sm:py-10 p-5`}
    >
      <hr className="w-full border-t-[10px] border-darkBlue rounded-t-md" />
      {informations.map((item, idx) => {
        return (
          <div key={idx} className="w-full">
            <h3 className={`${style.h3} !text-black`}>{item.title[lang]}</h3>
            <p className={`${style.p}`}>{item.descriptions[lang]}</p>
            <p className={`${style.p} mt-4`}>{item.descriptions2[lang]}</p>
            <div className={`${style.flexCol} w-full`}>
              {item.questions.map((item2, idx2) => (
                <div key={idx2} className="w-full">
                  <div
                    onClick={() => toggleMenu(item2.id)}
                    className={`${style.flexBetween} ${
                      isOpen === item2.id
                        ? "rounded-t-md bg-gray-200"
                        : "rounded-md bg-white"
                    } z-0 shadow-md transition duration-400 cursor-pointer w-full p-5`}
                    style={{
                      marginBottom: isOpen === item2.id ? "0" : "1px", // Masofani boshqarish
                    }}
                  >
                    <p className={`${style.p}`}>
                      {item2.id}. {item2.question[lang]}
                    </p>
                    <img
                      className={`transform ${
                        isOpen === item2.id ? "rotate-90" : ""
                      } transition-transform duration-300`}
                      src={item2.img || null}
                      alt="icon"
                    />
                  </div>
                  <div
                    className={`${
                      isOpen === item2.id
                        ? "max-h-full opacity-100"
                        : "max-h-0 opacity-0"
                    } overflow-hidden relative z-10 shadow-md transition-all bg-white duration-500 ease-in-out rounded-b-md w-full p-5`}
                  >
                    <div className={`${style.p} w-full space-y-2`}>
                      {item2.answer[lang]}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Informations;
