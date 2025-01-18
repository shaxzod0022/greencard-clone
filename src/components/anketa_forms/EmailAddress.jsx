import React, { useState } from "react";
import { style } from "../../util/style";
import { useSelector } from "react-redux";

const emailAddress = [
  {
    label: {
      uz: "a. Elektron pochta manzili (masalan, johndoe@example.com)",
      ru: "a. Адрес электронной почты (например, johndoe@example.com)",
    },
    name: "email",
  },
  {
    label: {
      uz: "b. Elektron pochta manzilini tasdiqlang",
      ru: "b. Подтвердите адрес электронной почты",
    },
    name: "confirmEmail",
  },
];

const EmailAddress = () => {
  const language = useSelector((state) => state.language);
  const [emailData, setEmailData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmailData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className={`w-full rounded-md`}>
      <p className={`${style.p} rounded-t-md p-3 bg-gray-200`}>
        6. {language === "uz" ? "Elektron pochta" : "Электронная почта"}
      </p>
      <div
        className={`${style.flexBetween} sm:gap-2 gap-6 !items-start border-2 w-full p-7`}
      >
        <div
          className={`${style.flexCol} justify-start md:w-[80%] w-full gap-2 !items-start`}
        >
          {emailAddress.map((item, idx) => (
            <div
              key={idx}
              className={`${style.flexCol} gap-2 !items-start w-full sm:w-[80%]`}
            >
              <label className={`${style.p}`}>{item.label[language]}</label>
              <input
                type="text"
                name={item.name}
                className="w-full border-2 outline-none p-2 rounded-md"
                onChange={handleChange}
                value={emailData[item.name] || ""}
              />
            </div>
          ))}
          <p>
            {language === "uz"
              ? "(Eslatma: Ushbu elektron pochta manzili siz tanlangan bo'lsangiz, qo'shimcha ma'lumot berish uchun ishlatiladi.)"
              : "(ЗАМЕТКА: Этот адрес электронной почты будет использоваться для предоставления дополнительной информации, если вы выбраны.)"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmailAddress;
