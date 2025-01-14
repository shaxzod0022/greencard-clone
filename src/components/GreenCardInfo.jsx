import React from "react";
import { style } from "../util/style";

const GreenCardInfo = () => {
  return (
    <div
      className={`${style.flexCol} sm:gap-4 gap-2 !items-start w-full lg:px-[120px] md:px-[80px] sm:px-[50px] sm:py-10 p-5`}
    >
      <hr className="w-full border-t-[10px] border-darkBlue rounded-t-md" />
      <h3 className={`${style.h3} !text-black font-semibold`}>
        Green Card nima?
      </h3>
      <p className={`${style.p}`}>
        Green Card Lotereyasi — AQSh hukumati tomonidan e’lon qilingan “DV
        Lottery” dasturi har yili dunyoning ko’plab mamlakatlaridan minglab
        odamlarga AQShga kelib yashash orzusini ro’yobga chiqarish imkoniyatini
        beradi. Siz ham buni qo’ldan boy bermang!
      </p>
      <p className={`${style.p}`}>
        Green Card dastur haqida ma'lumot: Kongress qarori bilan joriy etilgan
        “Turli millatlarga mansub immigrantlar viza dasturi E–DV” har yili
        Davlat Departamenti tomonidan boshqariladi. Immigratsiya va Fuqarolik
        Aktining (IFA) 203(s) bo‘limi Amerika Qo‘shma Shtatlariga tarixan
        immigratsiya ko‘rsatkichi past davlatlardan bo‘lgan “turli millatlarga
        mansub immigrantlar” deb ataluvchi immigrantlar sinfini joriy etadi.
      </p>
      <p className={`${style.p}`}>
        2021-soliq yilida 50 000 nafar “turli millatlarga mansub immigrantlar”
        (DV) vizalari mavjud bo‘ladi. Dasturda tanlab olinganlar (saralanganlar)
        “turli millatlarga mansub immigrantlar” vizalarini olishga muvofiq
        bo‘lishlari uchun dasturning oddiy, lekin qat'iy talablariga muvofiq
        bo‘lishlari shart. Davlat Departamenti saralanganlarni
        kompyuterlashtirilgan tasodifiy lotereya tanlovi orqali aniqlaydi.
        Vizalar olti jo‘g‘rofiy mintaqalar orasida taqsimlanadi, va hech qaysi
        bir davlatga bir yil ichida DV vizalarining yetti foizidan ortig‘i
        berilmaydi.
      </p>
    </div>
  );
};

export default GreenCardInfo;
