import React, { useState } from "react";
import { style } from "../../util/style";
import { useSelector } from "react-redux";

const BirthCity = () => {
  const [cityData, setCityData] = useState({
    cityName: "",
    noCityName: false,
  });

  const handleInputChange = (e) => {
    const { value } = e.target;
    setCityData((i) => ({
      ...i,
      cityName: value,
      noCityName: false,
    }));
  };

  const handleCheckboxChange = () => {
    setCityData((i) => ({
      ...i,
      cityName: "",
      noCityName: !i.noCityName,
    }));
  };

  const language = useSelector((state) => state.language);
  return (
    <div className={`w-full rounded-md`}>
      <p className={`${style.p} rounded-t-md p-3 bg-gray-200`}>
        4.{" "}
        {language === "uz"
          ? "Siz tug'ilgan viloyat"
          : "Провинция, где вы родились"}
      </p>
      <div
        className={`${style.flexBetween} sm:gap-2 gap-6 !items-start border-2 w-full p-7`}
      >
        <div
          className={`${style.flexCol} justify-start md:w-[80%] w-full gap-2 !items-start`}
        >
          <label className={`w-full ${style.p}`}>
            {language === "uz" ? "Tug'ilgan viloyat" : "Провинция рождения"}
          </label>
          <input
            className="border-2 w-full outline-none rounded-md p-2 no-spin"
            type="text"
            name="city"
            onChange={handleInputChange}
            value={cityData.cityName}
            disabled={cityData.noCityName}
          />
          <div className={`flex items-center gap-2 mt-2`}>
            <input
              className="cursor-pointer"
              type="checkbox"
              checked={cityData.noCityName}
              onChange={handleCheckboxChange}
            />
            <label>
              {language === "uz"
                ? "Tug'ilgan viloyati noma'lum"
                : "Провинция рождения неизвестен"}
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BirthCity;
