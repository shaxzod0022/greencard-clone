import React, { useState } from "react";
import { style } from "../../util/style";
import { useSelector } from "react-redux";

const SelectCountryToday = () => {
  const [cityDataToday, setCityDataToday] = useState({ cityName: "" });

  const handleInputChange = (e) => {
    const { value } = e.target;
    setCityDataToday((i) => ({
      ...i,
      cityName: value,
    }));
  };

  const language = useSelector((state) => state.language);
  return (
    <div className={`w-full rounded-md`}>
      <p className={`${style.p} rounded-t-md p-3 bg-gray-200`}>
        7.{" "}
        {language === "uz"
          ? "Hozirda yashayotgan mamlakatingiz"
          : "Страна, в которой вы живете сегодня"}
      </p>
      <div
        className={`${style.flexBetween} sm:gap-2 gap-6 !items-start border-2 w-full p-7`}
      >
        <div
          className={`${style.flexCol} justify-start md:w-[80%] w-full gap-2 !items-start`}
        >
          <input
            className="border-2 w-full outline-none rounded-md p-2 no-spin"
            type="text"
            name="city"
            onChange={handleInputChange}
            value={cityDataToday.cityName}
            placeholder={
              language === "uz"
                ? "Bir mamlakatni tanlang..."
                : "Выберите страну..."
            }
          />
        </div>
      </div>
    </div>
  );
};

export default SelectCountryToday;
