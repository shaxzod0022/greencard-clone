import React from "react";
import { style } from "../../util/style";
import { useDispatch, useSelector } from "react-redux";
import { updateInput } from "../../store/anketaData";

const SelectCountryToday = () => {
  const dispatch = useDispatch();
  const cityDataToday = useSelector((i) => i.form.data.countryOfResidence);
  const toggle = useSelector((i) => i.currentBtn.current);
  const handleInputChange = (e) => {
    const { value } = e.target;
    dispatch(
      updateInput({
        key: "countryOfResidence",
        name: "countryOfResidence",
        value: value,
      })
    );
  };

  const language = useSelector((state) => state.language.language);
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
          {toggle ? (
            <input
              className="border-2 w-full outline-none rounded-md p-2 no-spin"
              type="text"
              name="city"
              onChange={handleInputChange}
              value={cityDataToday.countryOfResidence}
              placeholder={
                language === "uz"
                  ? "Mamlakatni tanlang..."
                  : "Выберите страну..."
              }
            />
          ) : (
            <p className={`${style.p}`}>{cityDataToday.countryOfResidence}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SelectCountryToday;
