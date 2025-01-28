import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { style } from "../../util/style";
import { updateInput } from "../../store/anketaData";

const PhoneNum = () => {
  const language = useSelector((state) => state.language.language);
  const phoneNum = useSelector((i) => i.form.data.phoneNumber);
  const toggle = useSelector((i) => i.currentBtn.current);
  const dispatch = useDispatch();
  const handleInputChange = (e) => {
    const { value, max } = e.target;
    if (max && +value > +max) return;
    dispatch(
      updateInput({
        key: "phoneNumber",
        name: "phoneNumber",
        value: Number(value),
      })
    );
  };
  return (
    <div className={`w-full rounded-md`}>
      <p className={`${style.p} rounded-t-md p-3 bg-gray-200`}>
        8. {language === "uz" ? "Telefon raqami" : "Телефонный номер"}
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
              type="number"
              name="city"
              onChange={handleInputChange}
              value={phoneNum ? phoneNum.phoneNumber : ""}
              max={999999999999}
              min={990000000000}
            />
          ) : (
            <p className={`${style.p}`}>
              {phoneNum ? phoneNum.phoneNumber : ""}
            </p>
          )}
          <label>({language === "uz" ? "ixtiyoriy" : "необязательно"})</label>
        </div>
      </div>
    </div>
  );
};

export default PhoneNum;
