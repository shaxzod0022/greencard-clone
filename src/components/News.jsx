import React from "react";
import { style } from "../util/style";
import { newsData } from "../util/constants";
import { useSelector } from "react-redux";
const News = () => {
  const lang = useSelector((i) => i.language.language);
  return (
    <div
      className={`${style.flexCol} bg-lightGrey w-full lg:px-[120px] md:px-[80px] sm:px-[50px] sm:py-10 p-5`}
    >
      <h3 className={`${style.h3} !text-black mb-4 sm:mb-8 uppercase`}>
        {lang === "uz" ? "Yangiliklar" : "Новости"}
      </h3>
      <div
        className={`w-full flex md:justify-between justify-center !items-start gap-5 flex-wrap`}
      >
        {newsData.slice(0, 3).map((item, idx) => {
          return (
            <div
              key={idx}
              className={`${style.flexCol} shadow-xl flex-wrap !items-start gap-2 max-w-[390px] rounded-lg sm:w-[45%] lg:w-full w-full`}
            >
              <div className="h-[200px] w-full">
                <img
                  className="h-full object-cover w-full rounded-t-lg"
                  src={item.img || null}
                  alt=""
                />
              </div>
              <div className={`${style.flexCol} !items-start gap-3 p-5`}>
                <span className={`${style.span} text-gray-500`}>
                  {item.data}
                </span>
                <p
                  className={`${style.p} font-semibold uppercase text-titleColor`}
                >
                  {item.information[lang]}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default News;
