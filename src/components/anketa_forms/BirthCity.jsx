import React, { useState } from "react";
import { style } from "../../util/style";

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

  return (
    <div className={`w-full rounded-md`}>
      <p className={`${style.p} rounded-t-md p-3 bg-gray-200`}>
        4. City Where You Were Born
      </p>
      <div
        className={`${style.flexBetween} sm:gap-2 gap-6 !items-start border-2 w-full p-7`}
      >
        <div
          className={`${style.flexCol} justify-start md:w-[80%] w-full gap-2 !items-start`}
        >
          <label className={`w-full ${style.p}`}>Birth City</label>
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
            <label>Brith City Unknown</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BirthCity;
