import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom"; // To'g'ri import
import { style } from "../util/style";
import { logo, telegram } from "../assets";
import { navbarLinks } from "../util/constants";
import AnketaBtn from "./AnketaBtn";
import ModalMenyu from "./ModalMenyu";
import LangBtn from "./LangBtn";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [modal, setModal] = useState("-top-[0] -left-[170vh]");
  const language = useSelector((state) => state.language.language);
  const pathname = useLocation().pathname;

  const modalHidden = () => {
    setModal((prev) =>
      prev === "-top-[0] -left-[170vh]"
        ? "top-0 left-0"
        : "-top-[0] -left-[170vh]"
    );
  };

  useEffect(() => {
    setModal("-top-[0] -left-[170vh]");
  }, [pathname]);

  return (
    <div
      className={`${style.flexBetween} z-40 shadow-lg max-w-[1600px] w-full bg-white lg:px-[120px] px-5 sm:py-[6px] md:py-0 py-[15px] fixed top-0`}
    >
      <ModalMenyu
        value={`${modal} transition-[1s] duration-500`}
        onClick={modalHidden}
      />
      <div className={`flex items-center lg:gap-10 gap-5`}>
        <button onClick={modalHidden} className="md:hidden block">
          <i className="fa-solid fa-bars text-[25px]"></i>
        </button>
        <div className="md:bg-[#f8f8f8] bg-white lg:p-[18px] md:p-[15px] p-0 md:w-[80px] lg:w-[112px] w-[40px]">
          <Link className="w-full" to={`/`}>
            <img
              className="w-full"
              src={logo || null}
              alt="green card logo img"
            />
          </Link>
        </div>
        <ul className={`lg:gap-[1.2rem] gap-3 md:flex hidden`}>
          {navbarLinks.map((link) => (
            <li key={link.id} className={`font-semibold text-[18px]`}>
              <Link
                to={`/${link.id}`}
                className={`transition-all hover:text-red-500`}
              >
                {link.title[language]}
              </Link>
            </li>
          ))}
        </ul>
        <AnketaBtn
          className={`bg-red-500 active:bg-red-400 2xl:block hidden`}
        />
      </div>
      <div className="flex items-center gap-5">
        <LangBtn />
        <Link
          to={"/"}
          className="md:hidden xl:flex flex items-center gap-4 font-bold lg:text-[19px] md:text-[16px] text-[15px]"
        >
          <span>
            <img
              className="lg:w-[35px] md:w-[30px] w-[26px]"
              src={telegram}
              alt="greencard telegram"
            />
          </span>
          <span>@greencards_uz</span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
