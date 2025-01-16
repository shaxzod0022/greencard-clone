import React from "react";
import AnketaBtn from "./AnketaBtn";
import { style } from "../util/style";
import { headBg } from "../assets";
import { useLocation } from "react-router-dom";
import { headInfo } from "../util/constants";

const Head = () => {
  const { pathname } = useLocation();
  const headTitle =
    headInfo.find((item) => item.id === pathname.slice(1))?.title || null;
  if (pathname.slice(1) === "anketa") {
    return null;
  }
  return (
    <div
      className={`${
        headTitle === "Asosiy" ? "md:py-28 py-[30px]" : "md:py-[30px] py-[50px]"
      } lg:px-[120px] md:px-[110px] sm:px-[50px] px-5`}
      style={{
        backgroundImage: `url(${headBg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <h2 className={`${style.h2} !text-white`}>
        {headTitle === "Asosiy" ? (
          <div className={`${style.flexCol} !items-start sm:gap-7 gap-4`}>
            <h2 className={`${style.h2} !text-white`}>
              Greencards.uz bilan Green Card lotereyasini <br /> yutib oling!
            </h2>
            <p className={`${style.p} !text-white`}>
              Greencards.uz sizni Amerika DV Lottery dasturida <br /> rasmiy
              ro’yxatdan o’tkazadi
            </p>
            <AnketaBtn
              title={`Anketa to'ldirish`}
              className={`bg-green-500 active:bg-green-400`}
            />
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
