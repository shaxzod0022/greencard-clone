import React from "react";

const AnketaBtn = ({ className, title, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`${className} font-semibold text-white rounded-[40px] text-[18px] sm:px-[24px] px-[18px] sm:py-[12px] py-[9px]`}
    >
      {title}
    </button>
  );
};

export default AnketaBtn;
