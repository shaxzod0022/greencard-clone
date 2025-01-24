import React from "react";
import { style } from "../util/style";
import { aboutUsInfo } from "../util/constants";
import { useSelector } from "react-redux";
const AboutUs = () => {
  const lang = useSelector((i) => i.language.language);
  
  return (
    <div
      className={`${style.flexCol} w-full lg:px-[120px] md:px-[80px] sm:px-[50px] p-5`}
    >
      <h3 className={`${style.h3} mb-4 sm:mb-8`}>
        {lang === "uz"
          ? "Biz bilan ishlashning afzalliklari"
          : "Преимущества работы с нами"}
      </h3>
      <div
        className={`w-full flex md:justify-between justify-center !items-start gap-5 flex-wrap`}
      >
        {aboutUsInfo.map((item, idx) => {
          return (
            <div
              key={idx}
              className={`${style.flexCol} flex-wrap p-[22px] !items-start gap-2 max-w-[390px] border-[1px] rounded-sm sm:w-[45%] lg:w-full`}
            >
              <img src={item.img || null} alt="" />
              <h3 className={`${style.h3} !text-black`}>{item.title[lang]}</h3>
              <p className={`${style.p}`}>{item.information[lang]}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AboutUs;
