import React, { useState } from "react";
import { style } from "../util/style";
import { requestData } from "../util/constants";
import { useSelector } from "react-redux";

const Questions = () => {
  const [isOpen, setIsOpen] = useState({ id: null, completed: false });

  const toggleMenu = (id) => {
    setIsOpen((prevState) => ({
      id,
      completed: prevState.id === id ? !prevState.completed : true,
    }));
  };
  const lang = useSelector((i) => i.language);
  return (
    <div
      className={`${style.flexCol} w-full lg:px-[120px] md:px-[80px] sm:px-[50px] sm:py-10 p-5`}
    >
      <h3 className={`${style.h3} !text-black`}>
        {lang === "uz"
          ? "Ko‘p beriladigan savollarga javoblar"
          : "Ответы на часто задаваемые вопросы"}
      </h3>
      <div className={`${style.flexCol} w-full mb-8`}>
        {requestData.map((item, idx) => (
          <div key={idx} className="w-full">
            <div
              onClick={() => toggleMenu(item.id)}
              className={`${style.flexBetween} ${
                isOpen.id === item.id && isOpen.completed
                  ? "rounded-t-md bg-gray-200"
                  : "rounded-md bg-white"
              } z-0 shadow-md transition duration-400 cursor-pointer w-full p-5`}
            >
              <p className={`${style.p}`}>
                {item.id}. {item.request[lang]}
              </p>
              <img
                className={`transform ${
                  isOpen.id === item.id && isOpen.completed ? "rotate-90" : ""
                } transition-transform duration-300`}
                src={item.img || null}
                alt="icon"
              />
            </div>
            <div
              className={`${
                isOpen.id === item.id && isOpen.completed
                  ? "max-h-full opacity-100 mb-5"
                  : "max-h-0 opacity-0"
              } overflow-hidden relative z-10 shadow-md transition-all bg-white duration-500 ease-in-out rounded-b-md w-full p-5`}
            >
              <div className={`${style.p} w-full space-y-2`}>
                {item.respons[lang]}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Questions;
