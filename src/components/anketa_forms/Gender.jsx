import React from "react";
import { style } from "../../util/style";
import { useDispatch, useSelector } from "react-redux";
import { updateInput } from "../../store/anketaData";

const Gender = () => {
  const dispatch = useDispatch();
  const genderData = useSelector((i) => i.form?.data?.gender || {});
  const toggle = useSelector((i) => i.currentBtn.current);
  const handleChange = (e) => {
    dispatch(
      updateInput({
        key: "gender",
        name: "gender",
        value: e.target.value,
      })
    );
  };
  const language = useSelector((state) => state.language.language);

  return (
    <div className={`w-full rounded-md`}>
      <p className={`${style.p} rounded-t-md p-3 bg-gray-200`}>
        2. {language === "uz" ? "Jins" : "Пол"}
      </p>
      {toggle ? (
        <div className={`flex items-center gap-6 border-2 w-full p-7`}>
          <div className={`flex items-center gap-2`}>
            <input
              className="cursor-pointer"
              type="radio"
              name="gender"
              value="male"
              onChange={handleChange}
              checked={genderData?.gender === "male"}
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
              checked={genderData?.gender === "female"}
            />
            <label className={`w-full ${style.p}`}>
              {language === "uz" ? "Ayol" : "Женский"}
            </label>
            <i className="fa-solid fa-person-dress text-[25px]"></i>
          </div>
        </div>
      ) : (
        <div className="gap-6 border-2 w-full p-7">
          <p className={`w-full ${style.p}`}>
            {genderData.gender === "male" ? (
              <>{language === "uz" ? "Erkak" : "Мужской"}</>
            ) : (
              <>{language === "uz" ? "Ayol" : "Женский"}</>
            )}
          </p>
        </div>
      )}
    </div>
  );
};

export default Gender;
