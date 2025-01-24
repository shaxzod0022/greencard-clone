import React from "react";
import { style } from "../util/style";
import AnketaBtn from "./AnketaBtn";
import { useSelector } from "react-redux";

const AnketaBtnAndTitle = () => {
  const language = useSelector((state) => state.language.language);
  return (
    <div
      className={`${style.flexCol} bg-darkBlue sm:gap-4 gap-2 w-full lg:px-[120px] md:px-[80px] sm:px-[50px] sm:py-10 p-5`}
    >
      <h3 className={`${style.h3} !text-white font-semibold text-center`}>
        {language === "uz" ? (
          <>
            Imkoniyatni qo’ldan boy bermang! <br />
            Hoziroq saytda Green Card uchun anketa to’ldiring.
          </>
        ) : (
          <>
            Не упустите возможность! <br /> Заполните заявку на Грин Карту на
            сайте прямо сейчас.
          </>
        )}
      </h3>
      <AnketaBtn className={`bg-green-500 active:bg-green-400`} />
    </div>
  );
};

export default AnketaBtnAndTitle;
