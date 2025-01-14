import React from "react";
import { style } from "../util/style";
import { newsData } from "../util/constants";
const News = () => {
  return (
    <div
      className={`${style.flexCol} bg-lightGrey w-full lg:px-[120px] md:px-[80px] sm:px-[50px] sm:py-10 p-5`}
    >
      <div
        className={`w-full flex md:justify-between justify-center !items-start gap-5 flex-wrap`}
      >
        {newsData.map((item, idx) => {
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
                  {item.information}
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
