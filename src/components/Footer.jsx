import React from "react";
import { style } from "../util/style";
import { footerInfo } from "../util/constants";
import { Link } from "react-router";
import { useSelector } from "react-redux";

const Footer = () => {
  const language = useSelector((state) => state.language.language);
  return (
    <div
      className={`flex justify-center !items-start flex-wrap bg-white sm:gap-4 gap-5 w-full lg:px-[120px] md:px-[80px] sm:px-[50px] sm:pt-10  p-5`}
    >
      {footerInfo.map((item, idx) => {
        return (
          <div key={idx} className={`max-w-[390px] sm:w-[45%] w-full`}>
            <Link
              to={`/${item.url}`}
              className={`w-full justify-center flex items-center gap-4 flex-wrap`}
            >
              <img src={item.img || null} alt="" />
              <p className={`${style.p} !text-[20px] font-semibold`}>
                {item.contacts}
              </p>
            </Link>
          </div>
        );
      })}
      <hr className="w-full border-t-2px border-gray-400" />
      <p className={`${style.p} text-center !text-gray-800`}>
        {language === "uz"
          ? "© 2006-2025 Greencards.uz. Barcha huquqlar himoyalangan. Shaxsiy ma’lumotlaringiz boshqa shaxslarga taqdim etilmaydi."
          : "© 2006-2025 Greencards.uz. Все права защищены. Ваша личная информация не будет предоставлена ​​другим лицам."}
      </p>
    </div>
  );
};

export default Footer;
