import React from "react";
import { navbarLinks } from "../util/constants";
import { Link } from "react-router-dom"; // To'g'ri import
import { style } from "../util/style";
import { useSelector } from "react-redux";

const ModalMenyu = ({ value, onClick }) => {
  const language = useSelector((state) => state.language.language); // Tilni Redux'dan olish

  return (
    <div
      className={`w-[75%] z-50 ${style.flexCol} md:hidden flex absolute ${value} bg-white h-[100vh] p-3`}
    >
      <span onClick={onClick} className="absolute right-[12px] top-[12px]">
        <i className="fa-solid fa-xmark text-[20px]"></i>
      </span>
      {navbarLinks.map((link, idx) => (
        <Link
          className={`w-full ${
            idx === 0 && "mt-5"
          } hover:bg-slate-200 text-center py-2`}
          key={link.id}
          to={`/${link.id}`}
        >
          {link.title[language]} {/* Tilga qarab sarlavhalarni chiqarish */}
        </Link>
      ))}
    </div>
  );
};

export default ModalMenyu;
