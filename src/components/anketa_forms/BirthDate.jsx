import React from "react";
import { style } from "../../util/style";
import { useSelector, useDispatch } from "react-redux";
import { updateInput } from "../../store/anketaData";

const inputs = [
  {
    label: { uz: "Oy", ru: "Месяц" },
    name: "month",
    placeholder: { uz: "oo", ru: "мм" },
    max: 12,
    min: 1,
  },
  {
    label: { uz: "Kun", ru: "День" },
    name: "day",
    placeholder: { uz: "kk", ru: "дд" },
    max: 31,
    min: 1,
  },
  {
    label: { uz: "Yil", ru: "Год" },
    name: "year",
    placeholder: { uz: "yyyy", ru: "гггг" },
    max: 2006,
    min: 1900,
  },
];

const BirthDate = () => {
  const dispatch = useDispatch();
  const birthDate = useSelector((state) => state.form.data.dateOfBirth || {});
  const toggle = useSelector((i) => i.currentBtn.current);
  const language = useSelector((state) => state.language.language);

  const handleChange = (e) => {
    const { name, value, max } = e.target;
    if (max && +value > +max) return;
    if (!/^[0-9]*$/.test(Number(value))) return;
    dispatch(
      updateInput({
        key: "dateOfBirth",
        name: name,
        value: Number(value),
      })
    );
  };

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
            {toggle ? (
              <input
                className="border-2 w-full outline-none rounded-md p-2 no-spin"
                type="number"
                name={item.name}
                placeholder={item.placeholder[language]}
                value={birthDate[item.name] || ""}
                onChange={handleChange}
                max={item.max}
                min={item.min}
              />
            ) : (
              <>{birthDate[item.name] || ""}</>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BirthDate;
