import React from "react";
import { style } from "../../util/style";

const SelectBorn = () => {
  return (
    <div className={`w-full rounded-md`}>
      <p className={`${style.p} rounded-t-md p-3 bg-gray-200`}>
        5. Select Where You Were Born
      </p>
      <div
        className={`${style.flexBetween} sm:gap-2 gap-6 !items-start border-2 w-full p-7`}
      >
        <div
          className={`${style.flexCol} justify-start md:w-[80%] w-full gap-2 !items-start`}
        >
          <input
            className="border-2 w-full outline-none rounded-md p-2 no-spin"
            type="text"
            name="city"
            placeholder="Select A Country..."
          />
        </div>
      </div>
    </div>
  );
};

export default SelectBorn;
