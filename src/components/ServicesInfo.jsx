import React from "react";
import { style } from "../util/style";
import { logo2 } from "../assets";
const ServicesInfo = () => {
  return (
    <div
      className={`${style.flexCol} sm:gap-4 gap-2 !items-start w-full lg:px-[120px] md:px-[80px] sm:px-[50px] sm:py-10 p-5`}
    >
      <h2 className={`${style.h3} !font-normal !text-black`}>
        Bizning companiya qo'yidagi xizmatlarni taklif etadi:
      </h2>
      <p className={`${style.p} text-gray-800`}>
        • 2025-yil uchun DV 2026 Green Card dasturiga ro'yxatga olish. <br />
        • Green Card g'oliblarga DS-260 formalarini to'ldirish DV 2025 <br />
        • G'oliblarni barcha hujjatlarini suhbatgacha tayyorlab berish. <br />•
        Green Card g'oliblarini (TIC Tashkent International Clinic) Toshkent
        Xalqaro Klinikasiga hujjatlar tayyorlab berish hamda navbatga qo'yish.{" "}
        <br />
        • Hujjatlarni ingliz tiliga tarjima qilish. <br />
        • Suhbat kunini boshqa davlatdan Toshkentdagi AQSH elchixonasiga olish
        hamda suhbat kuniga yozish va suhbat kunlarini kuzatib borish. <br />•
        Konsultaciya bepul.
      </p>
      <p className={`${style.p} text-gray-800`}>
        Kerakli hujjatlar ro'yxati: <br />
        1. Shaxsni tasdiqlovchi hujjat pasport nusxa. <br />
        2. Tug'ilgan haqida guvohnomalardan nusxa <br />
        3. Diplom va attestatdan nusxa <br />
        4. Green Card uchun rasm 600x600 pixelda yoki 5x5 smda elektron nusxada
        fleshkada original hajmda. <br />
      </p>
      <img className="w-[190px]" src={logo2 || null} alt="" />
    </div>
  );
};

export default ServicesInfo;
