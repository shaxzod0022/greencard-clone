import React, { useState } from "react";
import { style } from "../../util/style";
import { useSelector } from "react-redux";

const inputs = [
  {
    label: { uz: "Oy", ru: "Месяц" },
    name: "month",
    type: "number",
    placeholder: { uz: "oo", ru: "мм" },
    max: 12,
  },
  {
    label: { uz: "Kun", ru: "День" },
    name: "day",
    type: "number",
    placeholder: { uz: "kk", ru: "дд" },
    max: 31,
  },
  {
    label: { uz: "Yil", ru: "Год" },
    name: "year",
    type: "number",
    placeholder: { uz: "yyyy", ru: "гггг" },
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
  const language = useSelector((state) => state.language);
  return (
    <div className={`w-full rounded-md`}>
      <p className={`${style.p} rounded-t-md p-3 bg-gray-200`}>
        3. {language === "uz" ? "Tug'ilgan kun sanasi" : "Дата рождения"}
      </p>
      <div
        className={`${style.flexBetween} sm:gap-2 gap-6 !items-start border-2 w-full p-7`}
      >
        {inputs.map((item, idx) => (
          <div
            key={idx}
            className={`${style.flexCol} justify-start lg:w-[30%] sm:w-[45%] w-full gap-2 !items-start`}
          >
            <label className={`w-full ${style.p}`}>
              {item.label[language]}
            </label>
            <input
              className="border-2 w-full outline-none rounded-md p-2 no-spin"
              type={item.type}
              name={item.name}
              placeholder={item.placeholder[language]}
              value={birthData[item.name]}
              onChange={handleChange}
              max={item.max}
              min={1}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BirthDate;
