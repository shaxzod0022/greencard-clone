import React from "react";
import { style } from "../util/style";
import AnketaBtn from "./AnketaBtn";

const AnketaBtnAndTitle = () => {
  return (
    <div
      className={`${style.flexCol} bg-darkBlue sm:gap-4 gap-2 w-full lg:px-[120px] md:px-[80px] sm:px-[50px] sm:py-10 p-5`}
    >
      <h3
        className={`${style.h3} !text-white font-semibold text-center`}
      >
        Imkoniyatni qo’ldan boy bermang! <br />
        Hoziroq saytda Green Card uchun anketa to’ldiring.
      </h3>
      <AnketaBtn
        title={`Anketa to'ldirish`}
        className={`bg-green-500 active:bg-green-400`}
      />
    </div>
  );
};

export default AnketaBtnAndTitle;
