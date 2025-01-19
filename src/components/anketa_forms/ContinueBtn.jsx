import React from "react";
import { useSelector } from "react-redux";

const ContinueBtn = ({ onClick }) => {
  const language = useSelector((state) => state.language);
  return (
    <button
      onClick={onClick}
      className={`font-semibold bg-darkBlue hover:bg-blue-700 active:bg-darkBlue text-white rounded-md text-[18px] sm:px-[24px] px-[18px] sm:py-[10px] py-[9px]`}
    >
      {language === "uz" ? "Davom etish" : "Продолжать"}
    </button>
  );
};

export default ContinueBtn;
