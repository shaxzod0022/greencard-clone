import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrent } from "../../store/currentBtn";
import { clearForm } from "../../store/anketaData";

const CanselEntryBtn = () => {
  const language = useSelector((state) => state.language.language);
  const toggle = useSelector((state) => state.currentBtn.current);
  const dispatch = useDispatch();
  const canselBtn = () => {
    dispatch(clearForm());
    dispatch(setCurrent(!toggle));
    window.scrollTo(0, 0);
  };
  return (
    <button
      onClick={canselBtn}
      className={`${
        toggle && "hidden"
      } font-semibold bg-darkBlue hover:bg-blue-700 active:bg-darkBlue text-white rounded-md text-[18px] sm:px-[24px] px-[18px] sm:py-[10px] py-[9px]`}
    >
      {language === "uz" ? "Bekor qilish" : "Отмена"}
    </button>
  );
};

export default CanselEntryBtn;
