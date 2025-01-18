import React, { useState } from "react";
import { style } from "../../util/style";
import { useSelector } from "react-redux";

const Gender = () => {
  const [genderData, setGenderData] = useState("");
  const handleChange = (e) => {
    setGenderData(e.target.value);
  };
  const language = useSelector((state) => state.language);
  console.log(genderData);

  return (
    <div className={`w-full rounded-md`}>
      <p className={`${style.p} rounded-t-md p-3 bg-gray-200`}>
        2. {language === "uz" ? "Jins" : "Пол"}
      </p>
      <div className={`flex items-center gap-6 border-2 w-full p-7`}>
        <div className={`flex items-center gap-2`}>
          <input
            className="cursor-pointer"
            type="radio"
            name="gender"
            value="male"
            onChange={handleChange}
          />
          <label className={`w-full ${style.p}`}>
            {language === "uz" ? "Erkak" : "Мужской"}
          </label>
          <i className="fa-solid fa-person text-[25px]"></i>
        </div>
        <div className={`flex items-center gap-2`}>
          <input
            className="cursor-pointer"
            type="radio"
            name="gender"
            value="female"
            onChange={handleChange}
          />
          <label className={`w-full ${style.p}`}>
            {language === "uz" ? "Ayol" : "Женский"}
          </label>
          <i className="fa-solid fa-person-dress text-[25px]"></i>
        </div>
      </div>
    </div>
  );
};

export default Gender;
