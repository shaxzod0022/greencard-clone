import React from "react";
import AnketaBtn from "./AnketaBtn";
import { style } from "../util/style";
import { headBg } from "../assets";
import { useLocation } from "react-router-dom";
import { headInfo } from "../util/constants";
import { useSelector } from "react-redux";

const Head = () => {
  const language = useSelector((i) => i.language);
  const { pathname } = useLocation();
  const headTitle =
    headInfo.find((item) => item.id === pathname.slice(1))?.title[language] ||
    null;
  if (pathname.slice(1) === "anketa") {
    return null;
  }
  return (
    <div
      className={`${
        headTitle === "Asosiy" || headTitle === "Главная"
          ? "md:py-28 py-[30px]"
          : "md:py-[30px] py-[50px]"
      } lg:px-[120px] md:px-[110px] sm:px-[50px] px-5 lg:mt-28 sm:mt-[52px] mt-[70px]`}
      style={{
        backgroundImage: `url(${headBg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <h2 className={`${style.h2} !text-white`}>
        {headTitle === "Asosiy" || headTitle === "Главная" ? (
          <div className={`${style.flexCol} !items-start sm:gap-7 gap-4`}>
            <h2 className={`${style.h2} !text-white`}>
              {language === "uz" ? (
                <>
                  Greencards.uz bilan Green Card lotereyasini <br /> yutib
                  oling!
                </>
              ) : (
                <>
                  Выиграйте в лотерею Green Card <br /> вместе с Greencards.uz!
                </>
              )}
            </h2>
            <p className={`${style.p} !text-white`}>
              {language === "uz" ? (
                <>
                  Greencards.uz sizni Amerika DV Lottery dasturida <br /> rasmiy
                  ro’yxatdan o’tkazadi
                </>
              ) : (
                <>
                  Greencards.uz – ваш официальный <br /> в программе American DV
                  Lottery регистрирует
                </>
              )}
            </p>
            <AnketaBtn className={`bg-green-500 active:bg-green-400`} />
          </div>
        ) : headTitle === null ? (
          <div>Not Found</div>
        ) : (
          headTitle
        )}
      </h2>
    </div>
  );
};

export default Head;
