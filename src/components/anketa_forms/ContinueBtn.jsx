import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrent } from "../../store/currentBtn";

const ContinueBtn = () => {
  const language = useSelector((state) => state.language.language);
  const toggle = useSelector((state) => state.currentBtn.current);
  const dispatch = useDispatch();

  const updateBtnBoolen = () => {
    dispatch(setCurrent(!toggle));
    if (!toggle) {
      window.scrollTo(0, 0);
    }
  };

  return (
    <button
      onClick={updateBtnBoolen}
      className={`font-semibold bg-darkBlue hover:bg-blue-700 active:bg-darkBlue text-white rounded-md text-[18px] sm:px-[24px] px-[18px] sm:py-[10px] py-[9px]`}
    >
      {toggle
        ? `${language === "uz" ? "Davom etish" : "Продолжать"}`
        : `${
            language === "uz"
              ? "Orqaga qaytish va o'zgartirish"
              : "Вернитесь и измените"
          }`}
    </button>
  );
};

export default ContinueBtn;
