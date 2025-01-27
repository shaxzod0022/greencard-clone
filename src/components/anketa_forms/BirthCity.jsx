import React from "react";
import { style } from "../../util/style";
import { useDispatch, useSelector } from "react-redux";
import { updateInput } from "../../store/anketaData";

const BirthCity = () => {
  const dispatch = useDispatch();
  const { cityName = "", noCityName = false } = useSelector(
    (state) => state.form.data.nativeRegion || {}
  );
  const language = useSelector((state) => state.language.language);
  const toggle = useSelector((i) => i.currentBtn.current);

  const handleInputChange = (e) => {
    if (/^[a-zA-Z]*$/.test(e.target.value))
      dispatch(
        updateInput({
          key: "nativeRegion",
          name: "cityName",
          value: e.target.value,
        })
      );
  };

  const handleCheckboxChange = (e) => {
    const isChecked = e.target.checked;
    console.log(isChecked);

    dispatch(
      updateInput({
        key: "nativeRegion",
        name: "noCityName",
        value: isChecked,
      })
    );

    dispatch(
      updateInput({
        key: "nativeRegion",
        name: "cityName",
        value: isChecked ? "" : cityName,
      })
    );
  };

  return (
    <div className={`w-full rounded-md`}>
      <p className={`${style.p} rounded-t-md p-3 bg-gray-200`}>
        4.{" "}
        {language === "uz"
          ? "Siz tug'ilgan viloyat"
          : "Провинция, где вы родились"}
      </p>
      {toggle ? (
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
              onChange={handleInputChange}
              value={cityName}
              disabled={noCityName}
            />
            <div className={`flex items-center gap-2 mt-2`}>
              <input
                className="cursor-pointer"
                type="checkbox"
                checked={noCityName}
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
      ) : (
        <div className="border-2 w-full p-7">
          <p className={`${style.p}`}>{cityName}</p>
        </div>
      )}
    </div>
  );
};

export default BirthCity;
