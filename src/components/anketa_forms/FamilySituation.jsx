import React, { useState } from "react";
import { style } from "../../util/style";
import { useSelector } from "react-redux";

const familySituation = [
  {
    label: {
      uz: "Yolg'iz",
      ru: "Холост",
    },
    situation: "Unmarried",
  },
  {
    label: {
      uz: "Turmushda, va erim/ xotinim AQSh fuqarosi yoki doimiy yashovchi emas (LPR)",
      ru: "Женат, и мой супруг не является гражданином США или постоянным жителем (LPR)",
    },
    situation:
      "Married and my spouse is NOT a U.S. citizen or Lawful Permanent Resident (LPR)",
  },
  {
    label: {
      uz: "Turmushda, va erim/ xotinim AQSh fuqarosi yoki doimiy yashovchi (LPR)",
      ru: "Женат, и мой супруг является гражданином США или постоянным жителем (LPR)",
    },
    situation:
      "Married and my spouse is a U.S. citizen or Lawful Permanent Resident (LPR)",
  },
  {
    label: {
      uz: "Ajrashgan",
      ru: "Разведен",
    },
    situation: "Divorced",
  },
  {
    label: {
      uz: "Yetim",
      ru: "Вдовец",
    },
    situation: "Widowed",
  },
  {
    label: {
      uz: "Yuridik jihatdan ajratilgan",
      ru: "Юридически раздельны",
    },
    situation: "Legally Separated",
  },
];

const FamilySituation = () => {
  const language = useSelector((state) => state.language);
  const [situationData, setSituationData] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSituationData((i) => ({ ...i, [name]: value }));
  };
  console.log(situationData);

  return (
    <div className={`w-full rounded-md`}>
      <p className={`${style.p} rounded-t-md p-3 bg-gray-200`}>
        8.{" "}
        {language === "uz"
          ? "Hozirgi oilaviy holatingiz nima?"
          : "Какой у вас текущий семейный статус?"}
      </p>
      <div
        className={`${style.flexBetween} sm:gap-2 gap-6 !items-start border-2 w-full p-7`}
      >
        <div
          className={`${style.flexCol} justify-start w-full gap-2 !items-start`}
        >
          {familySituation.map((item, idx) => (
            <div key={idx} className={`flex items-center gap-2 w-full`}>
              <input
                type="radio"
                name="situation"
                className="cursor-pointer"
                onChange={handleChange}
                value={item.situation}
              />
              <label className={`${style.p}`}>{item.label[language]}</label>
            </div>
          ))}
          {language === "uz" ? (
            <p className="w-full mt-3">
              Yuridik jihatdan ajratish — bu juftlik ajralishga qaror qilganda
              yuzaga keladigan holat. Agar siz turmush qurgan bo'lsangiz va
              yuridik jihatdan ajratilgan bo'lsangiz, eringiz/ xotinishingiz siz
              bilan birga imigratsiya qila olmaydi. Agar siz yuridik jihatdan
              ajratilgan bo'lsangiz, eringiz/ xotinangizning ismini
              ko'rsatganingiz uchun jazolanmaysiz. <br />
              Agar siz yuridik jihatdan ajratilgan bo'lsangiz va sud qarori
              bilan ajralgan bo'lsangiz, siz eringiz/ xotinangizni ko'rsata
              olmaysiz, hatto siz vizaga ariza berishdan oldin ajrashishni
              rejalashtirsangiz ham. <br /> Agar sizning eringiz/ xotinangiz
              AQSh fuqarosi yoki doimiy yashovchi bo'lsa, uni arizangizda
              ko'rsatmang.
            </p>
          ) : (
            <p className="w-full mt-3">
              Юридическое раздельное положение возникает, когда пара принимает
              решение разойтись, следуя друг за другом. Если вы женаты и
              юридически раздельны, ваш супруг не может иммигрировать с вами
              через программу визы разнообразия. Вы не будете наказаны, если
              решите указать имя супруга, когда вы находитесь в законном
              раздельном положении. <br />
              Если вы юридически раздельны по судебному решению, вы не можете
              указать супруга, даже если вы планируете развестись до подачи
              заявки на визу разнообразия. <br /> Если ваш супруг является
              гражданином США или постоянным жителем, не указывайте его в вашем
              заявлении.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default FamilySituation;
