import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router";

const AnketaBtn = ({ className }) => {
  const language = useSelector((state) => state.language);
  return (
    <Link
      className={`${className} font-semibold text-white rounded-[40px] text-[18px] sm:px-[24px] px-[18px] sm:py-[12px] py-[9px]`}
      to={`/anketa`}
    >
      {language === "uz" ? "Anketa to'ldirish" : "Заполните анкета"}
    </Link>
  );
};

export default AnketaBtn;
