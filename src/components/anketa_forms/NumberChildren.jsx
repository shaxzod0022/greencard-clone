import React, { useState } from "react";
import { useSelector } from "react-redux";
import { style } from "../../util/style";

const NumberChildren = () => {
  const [childrenNum, setChildrenNum] = useState({ childrenNumber: 0 });

  const handleInputChange = (e) => {
    const { value, max } = e.target;
    if (max && +value > +max) return;
    setChildrenNum((i) => ({
      ...i,
      childrenNumber: value,
    }));
  };

  const language = useSelector((state) => state.language);
  return (
    <div className={`w-full rounded-md`}>
      <p className={`${style.p} rounded-t-md p-3 bg-gray-200`}>
        9. {language === "uz" ? "Bolalar soni" : "Количество детей"}
      </p>
      <div
        className={`${style.flexBetween} sm:gap-2 gap-6 !items-start border-2 w-full p-7`}
      >
        <div
          className={`${style.flexCol} justify-start w-full gap-2 !items-start`}
        >
          <input
            className="border-2 outline-none rounded-md p-2 no-spin"
            type="number"
            name="city"
            onChange={handleInputChange}
            value={childrenNum.childrenNumber}
            max={15}
            min={0}
          />
          <label>
            {language === "uz"
              ? "Bolalar barcha biologik bolalarni, qonuniy tarzda qabul qilingan bolalarni va 21 yoshga yetmagan, turmush qurmagan bolalarni o'z ichiga oladi. Siz barcha mos bolalarni ko'rsatishingiz kerak, hatto ular siz bilan yashamasa yoki Diversifikatsiya vizasiga murojaat qilishni rejalashtirmasa ham. Bu sizning qarindoshlaringizga ham tegishli. Barcha mos bolalarni ko'rsatmaslik disqualifikatsiya uchun sabab bo'ladi. Agar sizning bolangiz AQSh fuqarosi yoki doimiy yashovchi bo'lsa, uni arizangizda ko'rsatmang."
              : "Дети включают всех биологических детей, законно усыновленных детей и детей, которые не состоят в браке и не достигли 21 года на дату подачи вашей заявки. Вы должны указать всех eligible детей, даже если они не живут с вами или не собираются подавать заявку на визу разнообразия. Это также относится к вашим зависимым. Непредставление всех eligible детей является основанием для дисквалификации. Если ваш ребенок является гражданином США или постоянным жителем, не указывайте его в вашей заявке."}
          </label>
        </div>
      </div>
    </div>
  );
};

export default NumberChildren;
