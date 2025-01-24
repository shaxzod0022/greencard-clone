import React from "react";
import { useSelector } from "react-redux";

const SubmitBtn = () => {
  const toggle = useSelector((state) => state.currentBtn.current);
  const language = useSelector((state) => state.language.language);

  return (
    <button
      className={`${
        toggle && "hidden"
      } font-semibold bg-green-600 hover:bg-green-700 active:bg-green-600 text-white rounded-md text-[18px] sm:px-[24px] px-[18px] sm:py-[10px] py-[9px]`}
    >
      {language === "uz" ? "Jo'natish" : "Отправка"}
    </button>
  );
};

export default SubmitBtn;
