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
      className="bg-darkBlue text-white sm:px-4 sm:py-1 px-3 py-1 rounded-md font-semibold"
      onClick={updateLanguage}
    >
      {language.toUpperCase()}
    </button>
  );
};

export default LangBtn;
