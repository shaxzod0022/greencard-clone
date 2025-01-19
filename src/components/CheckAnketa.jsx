import React from "react";
import { style } from "../util/style";
import { useSelector } from "react-redux";

const CheckAnketa = () => {
  const lang = useSelector((i) => i.language);
  return (
    <div
      className={`w-full ${style.flexCol} gap-8 md:py-[60px] py-[40px] lg:px-[150px] md:px-[30px] sm:px-[50px] px-5`}
    >
      <h3 className={`${style.h3}`}>
        {lang === "uz"
          ? "Anketa holatini tekshirish"
          : "Проверка статуса заявки"}
      </h3>
      <div
        className={`sm:border-2 lg:w-[80%] w-full border-0 border-blueColor  rounded-[28px] ${style.flexBetween} sm:gap-0 gap-5`}
      >
        <input
          className="md:w-[82%] sm:w-[70%] w-full sm:border-0 border-2 border-blueColor outline-none rounded-[28px] px-4 py-2 md:text-[22px] text-[15px] font-semibold"
          type="text"
          placeholder={
            lang === "uz"
              ? "ANKETA RAQAMI: 2027_____ _____ _____"
              : "НОМЕР АНКЕТЫ: 2027_____ _____ _____"
          }
        />
        <button
          className={`bg-blueColor h-full text-white sm:w-[27%] md:w-[18%] w-full sm:py-4 py-2 px-6 sm:rounded-r-[25.5px] rounded-[28px] sm:rounded-none md:text-[18px] text-[16px]`}
        >
          {lang==="uz"?"TEKSHIRISH":"ПРОВЕРИТЬ"}
        </button>
      </div>
    </div>
  );
};

export default CheckAnketa;
