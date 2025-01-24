import React from "react";
import { style } from "../util/style";
import { useSelector } from "react-redux";

const GreenCardInfo = () => {
  const lang = useSelector((i) => i.language.language);
  return (
    <div
      className={`${style.flexCol} sm:gap-4 gap-2 !items-start w-full lg:px-[120px] md:px-[80px] sm:px-[50px] sm:py-10 p-5`}
    >
      <hr className="w-full border-t-[10px] border-darkBlue rounded-t-md" />
      {lang === "uz" ? (
        <>
          <h3 className={`${style.h3} !text-black font-semibold`}>
            Green Card nima?
          </h3>
          <p className={`${style.p}`}>
            Green Card Lotereyasi — AQSh hukumati tomonidan e’lon qilingan “DV
            Lottery” dasturi har yili dunyoning ko’plab mamlakatlaridan minglab
            odamlarga AQShga kelib yashash orzusini ro’yobga chiqarish
            imkoniyatini beradi. Siz ham buni qo’ldan boy bermang!
          </p>
          <p className={`${style.p}`}>
            Green Card dastur haqida ma'lumot: Kongress qarori bilan joriy
            etilgan “Turli millatlarga mansub immigrantlar viza dasturi E–DV”
            har yili Davlat Departamenti tomonidan boshqariladi. Immigratsiya va
            Fuqarolik Aktining (IFA) 203(s) bo‘limi Amerika Qo‘shma Shtatlariga
            tarixan immigratsiya ko‘rsatkichi past davlatlardan bo‘lgan “turli
            millatlarga mansub immigrantlar” deb ataluvchi immigrantlar sinfini
            joriy etadi.
          </p>
          <p className={`${style.p}`}>
            2021-soliq yilida 50 000 nafar “turli millatlarga mansub
            immigrantlar” (DV) vizalari mavjud bo‘ladi. Dasturda tanlab
            olinganlar (saralanganlar) “turli millatlarga mansub immigrantlar”
            vizalarini olishga muvofiq bo‘lishlari uchun dasturning oddiy, lekin
            qat'iy talablariga muvofiq bo‘lishlari shart. Davlat Departamenti
            saralanganlarni kompyuterlashtirilgan tasodifiy lotereya tanlovi
            orqali aniqlaydi. Vizalar olti jo‘g‘rofiy mintaqalar orasida
            taqsimlanadi, va hech qaysi bir davlatga bir yil ichida DV
            vizalarining yetti foizidan ortig‘i berilmaydi.
          </p>
        </>
      ) : (
        <>
          <h3 className={`${style.h3} !text-black font-semibold`}>
            Что такое Green Card?
          </h3>
          <p className={`${style.p}`}>
            Лотерея Green Card — это программа «DV Lottery», объявленная
            правительством США, которая дает возможность тысячам людей со всего
            мира осуществить свою мечту о переезде в США. Не упустите этот шанс!
          </p>
          <p className={`${style.p}`}>
            Информация о программе Green Card: Программа для иммигрантов разных
            национальностей (E-DV), введенная решением Конгресса, управляется
            Государственным департаментом США. Раздел 203(s) Акта об иммиграции
            и гражданстве (IFA) вводит категорию «иммигрантов разных
            национальностей», которые исторически были мало представлены среди
            иммигрантов в США.
          </p>
          <p className={`${style.p}`}>
            В 2021 году будет доступно 50 000 виз для «иммигрантов разных
            национальностей» (DV). Для того чтобы участвовать в программе,
            отобранные кандидаты должны соответствовать простым, но строгим
            требованиям программы. Государственный департамент выбирает
            победителей случайным образом с помощью компьютерной лотереи. Визы
            распределяются между шестью географическими регионами, и никакой
            стране не предоставляется более 7% всех виз в течение года.
          </p>
        </>
      )}
    </div>
  );
};

export default GreenCardInfo;
