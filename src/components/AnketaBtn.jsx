import React from "react";
import { Link } from "react-router";

const AnketaBtn = ({ className, title }) => {
  return (
    <Link
      className={`${className} font-semibold text-white rounded-[40px] text-[18px] sm:px-[24px] px-[18px] sm:py-[12px] py-[9px]`}
      to={`/anketa`}
    >
      {title}
    </Link>
  );
};

export default AnketaBtn;
