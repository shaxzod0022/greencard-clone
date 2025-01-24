import React from "react";
import { style } from "../util/style";
import { logo2 } from "../assets";
import { useSelector } from "react-redux";

const Services = () => {
  const lang = useSelector((i) => i.language.language);
  return (
    <div
      className={`${style.flexCol} sm:gap-4 gap-2 !items-start w-full lg:px-[120px] md:px-[80px] sm:px-[50px] sm:py-10 p-5`}
    >
      {lang === "uz" ? (
        <>
          <h2 className={`${style.h3} !font-normal !text-black`}>
            Bizning kompaniya quyidagi xizmatlarni taklif etadi:
          </h2>
          <p className={`${style.p} text-gray-800`}>
            • 2025-yil uchun DV 2026 Green Card dasturiga ro'yxatga olish.{" "}
            <br />• Green Card g'oliblarga DS-260 formalarini to'ldirish DV 2025{" "}
            <br />• G'oliblarni barcha hujjatlarini suhbatgacha tayyorlab
            berish. <br />• Green Card g'oliblarini (TIC Tashkent International
            Clinic) Toshkent Xalqaro Klinikasiga hujjatlar tayyorlab berish
            hamda navbatga qo'yish. <br />
            • Hujjatlarni ingliz tiliga tarjima qilish. <br />• Suhbat kunini
            boshqa davlatdan Toshkentdagi AQSH elchixonasiga olish hamda suhbat
            kuniga yozish va suhbat kunlarini kuzatib borish. <br />•
            Konsultatsiya bepul.
          </p>
          <p className={`${style.p} text-gray-800`}>
            Kerakli hujjatlar ro'yxati: <br />
            1. Shaxsni tasdiqlovchi hujjat pasport nusxasi. <br />
            2. Tug'ilganlik to'g'risida guvohnoma nusxasi. <br />
            3. Diplom va attestat nusxalari. <br />
            4. Green Card uchun rasm 600x600 pixelda yoki 5x5 smda elektron
            nusxada fleshkada original hajmda. <br />
          </p>
        </>
      ) : (
        <>
          <h2 className={`${style.h3} !font-normal !text-black`}>
            Наша компания предлагает следующие услуги:
          </h2>
          <p className={`${style.p} text-gray-800`}>
            • Регистрация на программу DV 2026 Green Card для 2025 года. <br />
            • Заполнение формы DS-260 для победителей Green Card DV 2025. <br />
            • Подготовка всех документов для победителей до собеседования.{" "}
            <br />• Подготовка документов и запись на прием для победителей
            Green Card в (TIC Tashkent International Clinic) Ташкентскую
            международную клинику. <br />
            • Перевод документов на английский язык. <br />
            • Организация собеседования в посольстве США в Ташкенте и
            отслеживание сроков собеседования. <br />• Бесплатная консультация.
          </p>
          <p className={`${style.p} text-gray-800`}>
            Список необходимых документов: <br />
            1. Копия удостоверяющего личность документа (паспорта). <br />
            2. Копия свидетельства о рождении. <br />
            3. Копия диплома и аттестата. <br />
            4. Фото для Green Card 600x600 пикселей или 5x5 см в электронном
            виде на флешке в оригинальном размере. <br />
          </p>
        </>
      )}

      <img className="w-[190px]" src={logo2 || null} alt="" />
    </div>
  );
};

export default Services;
