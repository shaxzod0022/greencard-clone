import React, { useState } from "react";
import { style } from "../../util/style";

const inputs = [
  {
    label: "Month",
    name: "month",
    type: "number",
    placeholder: "mm",
    max: 12,
  },
  {
    label: "Day",
    name: "day",
    type: "number",
    placeholder: "dd",
    max: 31,
  },
  {
    label: "Year",
    name: "year",
    type: "number",
    placeholder: "yyyy",
    max: 2006,
  },
];

const BirthDate = () => {
  const [birthData, setBirthData] = useState({
    month: "",
    day: "",
    year: "",
  });

  const handleChange = (e) => {
    const { name, value, max } = e.target;
    if (max && +value > +max) return;
    setBirthData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className={`w-full rounded-md`}>
      <p className={`${style.p} rounded-t-md p-3 bg-gray-200`}>3. Birth Date</p>
      <div
        className={`${style.flexBetween} sm:gap-2 gap-6 !items-start border-2 w-full p-7`}
      >
        {inputs.map((item, idx) => (
          <div
            key={idx}
            className={`${style.flexCol} justify-start lg:w-[30%] sm:w-[45%] w-full gap-2 !items-start`}
          >
            <label className={`w-full ${style.p}`}>{item.label}</label>
            <input
              className="border-2 w-full outline-none rounded-md p-2 no-spin"
              type={item.type}
              name={item.name}
              placeholder={item.placeholder}
              value={birthData[item.name]}
              onChange={handleChange}
              max={item.max}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BirthDate;
