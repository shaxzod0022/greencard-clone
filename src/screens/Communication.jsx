import React from "react";
import { style } from "../util/style";
import { Link } from "react-router";

const Communication = () => {
  return (
    <div
      className={`${style.flexCol} sm:gap-4 gap-2 !items-start w-full lg:px-[120px] md:px-[80px] sm:px-[50px] sm:py-10 p-5`}
    >
      <h3 className={`${style.h3} !text-black lg:text-[45px] !font-normal`}>
        Biz bilan bog'laning
      </h3>
      <hr className="w-full border-t-[10px] border-darkBlue rounded-t-md" />
      <ul className={`${style.flexCol} gap-2 !items-start mt-3`}>
        <li className={`${style.p}`}>
          <p>☎️ Call Markaz: +998(99) 252 2727</p>
        </li>
        <li className={`${style.p}`}>
          <span>Telegramdagi kanalimiz: </span>
          <Link className="text-blue-500" to={"/"}>
            @gc_uz
          </Link>
        </li>
        <li className={`${style.p}`}>
          <span>Online operator: </span>
          <Link className="text-blue-500" to={"/"}>
            @greencards_uz
          </Link>
        </li>
        <li className={`${style.p}`}>
          <span>24/7 Telegram bot: </span>
          <Link className="text-blue-500" to={"/"}>
            @gcuzbot
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Communication;
