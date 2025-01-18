import React, { useState } from "react";
import { useSelector } from "react-redux";
import { style } from "../../util/style";

const PhoneNum = () => {
  const [phoneNum, setPhoneNum] = useState({ phoneNumber: "" });

  const handleInputChange = (e) => {
    const { value, max } = e.target;
    if (max && +value > +max) return;
    setPhoneNum((i) => ({
      ...i,
      phoneNumber: value,
    }));
  };

  const language = useSelector((state) => state.language);
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
          <input
            className="border-2 w-full outline-none rounded-md p-2 no-spin"
            type="number"
            name="city"
            onChange={handleInputChange}
            value={phoneNum.phoneNumber}
            max={999999999999}
            min={990000000000}
          />
          <label>({language === "uz" ? "ixtiyoriy" : "необязательно"})</label>
        </div>
      </div>
    </div>
  );
};

export default PhoneNum;
