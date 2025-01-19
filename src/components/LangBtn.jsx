import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setLanguage } from "../store/lang";

const LangBtn = () => {
  const [language, setLanguageState] = useState(
    localStorage.getItem("language") || "ru"
  );

  const dispatch = useDispatch();

  const updateLanguage = () => {
    const newLanguage = language === "uz" ? "ru" : "uz";
    setLanguageState(newLanguage);
    dispatch(setLanguage(newLanguage));
  };

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  return (
    <button
      className="border-darkBlue border-[3px] text-darkBlue hover:bg-darkBlue hover:text-white transition px-3.5 py-0.5 rounded-md font-semibold"
      onClick={updateLanguage}
    >
      {language.toUpperCase()}
    </button>
  );
};

export default LangBtn;
