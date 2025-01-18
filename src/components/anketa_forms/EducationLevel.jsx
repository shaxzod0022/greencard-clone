import React, { useState } from "react";
import { style } from "../../util/style";
import { useSelector } from "react-redux";
import { Link } from "react-router";

const educationLevels = [
  {
    label: {
      uz: "Faqat boshlang'ich maktab",
      ru: "Только начальная школа",
    },
    levelName: "Primary school only",
  },
  {
    label: {
      uz: "O'rta maktab",
      ru: "Средняя школа",
    },
    levelName: "High School",
  },
  {
    label: {
      uz: "O'rta ta'lim diplomi",
      ru: "Аттестат о среднем образовании",
    },
    levelName: "High School degree",
  },
  {
    label: {
      uz: "Kasb-hunar ta'limi",
      ru: "Профессиональное образование",
    },
    levelName: "Vocational School",
  },
  {
    label: {
      uz: "Ba'zi universitet kurslari",
      ru: "Некоторые курсы университетского уровня",
    },
    levelName: "Some University Courses",
  },
  {
    label: {
      uz: "Bakalavr darajasi",
      ru: "Степень бакалавра",
    },
    levelName: "University Degree",
  },
  {
    label: {
      uz: "Ba'zi magistratura kurslari",
      ru: "Некоторые курсы магистратуры",
    },
    levelName: "Some Graduate Level Courses",
  },
  {
    label: {
      uz: "Magistr darajasi",
      ru: "Степень магистра",
    },
    levelName: "Master's Degree",
  },
  {
    label: {
      uz: "Ba'zi doktorantura kurslari",
      ru: "Некоторые курсы докторантуры",
    },
    levelName: "Some Doctorate Level Courses",
  },
  {
    label: {
      uz: "Doktor darajasi",
      ru: "Степень доктора",
    },
    levelName: "Doctorate Degree",
  },
];

const EducationLevel = () => {
  const language = useSelector((state) => state.language);
  const [levelData, setLevelData] = useState({});
  console.log(levelData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLevelData((i) => ({ ...i, [name]: value }));
  };
  return (
    <div className={`w-full rounded-md`}>
      <p className={`${style.p} rounded-t-md p-3 bg-gray-200`}>
        7.{" "}
        {language === "uz"
          ? "Hozirgi kunda erishgan eng yuqori ta'lim darajangiz nima?"
          : "Какой наивысший уровень образования вы достигли на сегодняшний день?"}
      </p>
      <div
        className={`${style.flexBetween} sm:gap-2 gap-6 !items-start border-2 w-full p-7`}
      >
        <div
          className={`${style.flexCol} justify-start w-full gap-2 !items-start`}
        >
          {educationLevels.map((item, idx) => (
            <div key={idx} className={`flex items-center gap-2 w-full`}>
              <input
                type="radio"
                name="level"
                className="cursor-pointer"
                onChange={handleChange}
                value={item.levelName}
              />
              <label className={`${style.p}`}>{item.label[language]}</label>
            </div>
          ))}
          {language === "uz" ? (
            <p className="w-full mt-3">
              Sizda to'liq ta'lim kursini tamomlaganligini aks ettiruvchi
              minimal darajada o'rta ma'lumotga ega bo'lishingiz kerak
              (kasb-hunar maktablari yoki muvofiq diplomlar qabul qilinmaydi)
              yoki ikki yil davomida ta'lim yoki tajriba talab qiladigan kasbda
              malakali ishchi bo'lishingiz kerak (kasbingiz talablariga javob
              beradimi, bilish uchun{" "}
              <Link
                className="font-semibold text-blue-500"
                to={`https://www.onetonline.org/`}
              >
                www.onetonline.org
              </Link>{" "}
              saytiga o'ting).
            </p>
          ) : (
            <p className="w-full mt-3">
              Вы должны иметь как минимум диплом о среднем образовании,
              отражающий завершение полного курса обучения (профессиональные
              школы или эквивалентные степени не принимаются), или быть
              квалифицированным работником в профессии, которая требует как
              минимум два года обучения или опыта для получения квалификации
              (посетите{" "}
              <Link
                className="font-semibold text-blue-500"
                to={`https://www.onetonline.org/`}
              >
                www.onetonline.org
              </Link>
              , чтобы узнать, соответствует ли ваша профессия требованиям для
              получения визы).
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default EducationLevel;
