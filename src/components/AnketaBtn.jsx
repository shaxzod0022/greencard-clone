import React from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router";

const AnketaBtn = ({ className }) => {
  const language = useSelector((state) => state.language.language);
  const pathname = useLocation().pathname;
  return (
    <Link
      className={`${className} ${
        pathname === "/anketa" && "hidden"
      } font-semibold text-white rounded-[40px] text-[18px] sm:px-[24px] px-[18px] sm:py-[12px] py-[9px]`}
      to={`/anketa`}
    >
      {language === "uz" ? "Anketa to'ldirish" : "Заполните анкета"}
    </Link>
  );
};

export default AnketaBtn;
