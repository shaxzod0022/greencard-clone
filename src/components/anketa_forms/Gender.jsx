import React, { useState } from "react";
import { style } from "../../util/style";

const Gender = () => {
  const [genderData, setGenderData] = useState("");
  const handleChange = (e) => {
    setGenderData(e.target.value);
  };

  console.log(genderData);

  return (
    <div className={`w-full rounded-md`}>
      <p className={`${style.p} rounded-t-md p-3 bg-gray-200`}>2. Gender</p>
      <div className={`flex items-center gap-6 border-2 w-full p-7`}>
        <div className={`flex items-center gap-2`}>
          <input
            className="cursor-pointer"
            type="radio"
            name="gender"
            value="male"
            onChange={handleChange}
          />
          <label className={`w-full ${style.p}`}>Male</label>
          <i className="fa-solid fa-person text-[25px]"></i>
        </div>
        <div className={`flex items-center gap-2`}>
          <input
            className="cursor-pointer"
            type="radio"
            name="gender"
            value="female"
            onChange={handleChange}
          />
          <label className={`w-full ${style.p}`}>Female</label>
          <i className="fa-solid fa-person-dress text-[25px]"></i>
        </div>
      </div>
    </div>
  );
};

export default Gender;
