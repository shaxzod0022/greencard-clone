import React from "react";
import { navbarLinks } from "../util/constants";
import { Link } from "react-router";
import { style } from "../util/style";

const ModalMenyu = ({ value, onClick }) => {
  return (
    <div
      className={`w-[75%] z-50 ${style.flexCol} md:hidden flex absolute ${value} bg-white h-[100vh] p-3`}
    >
      <span onClick={onClick} className="absolute right-[12px] top-[12px]">
        <i className="fa-solid fa-xmark text-[20px]"></i>
      </span>
      {navbarLinks.map((link, idx) => {
        return (
          <Link
            className={`w-full ${
              idx === 0 && "mt-5"
            } hover:bg-slate-200 text-center py-2`}
            key={idx}
            to={`/${link.id}`}
          >
            {link.title}
          </Link>
        );
      })}
    </div>
  );
};

export default ModalMenyu;
