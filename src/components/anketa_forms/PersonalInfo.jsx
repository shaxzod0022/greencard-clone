import React, { useState } from "react";
import { style } from "../../util/style";
import { useSelector } from "react-redux";

const inputs = [
  {
    label: { uz: "Familia", ru: "Фамилия" },
    name: "lastName",
    type: "text",
    label2: null,
    name2: null,
    type2: null,
  },
  {
    label: { uz: "Ism", ru: "Имя" },
    name: "firstName",
    type: "text",
    label2: { uz: "Ism yo'q", ru: "Имя отсутствует" },
    name2: "noFirstName",
    type2: "checkbox",
  },
  {
    label: { uz: "Otasini ismi", ru: "Имя отца" },
    name: "middleName",
    type: "text",
    label2: { uz: "Otasining ismi yo'q", ru: "Нет отчества" },
    name2: "noMiddleName",
    type2: "checkbox",
  },
];

const PersonalInfo = () => {
  const [formData, setFormData] = useState({});
  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prev) => {
        const updatedData = { ...prev, [name]: checked };

        if (name === "noFirstName" && checked) {
          updatedData.firstName = "";
        }
        if (name === "noMiddleName" && checked) {
          updatedData.middleName = "";
        }

        if (name === "noFirstName" && !checked) {
          updatedData[name] = false;
        }
        if (name === "noMiddleName" && !checked) {
          updatedData[name] = false;
        }

        return updatedData;
      });
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
        ...(name === "firstName" && { noFirstName: false }),
        ...(name === "middleName" && { noMiddleName: false }),
      }));
    }
  };

  const language = useSelector((state) => state.language);

  return (
    <div className={`w-full rounded-md`}>
      <h2 className={`${style.h2} w-full text-center mb-2`}>
        {language === "uz"
          ? "Birinchi qism - Qatnashuvchi haqida ma'lumot"
          : "Часть первая – Информация для участников"}
      </h2>
      <div className={`w-full`}>
        <p className={`${style.p} rounded-t-md p-3 bg-gray-200`}>
          1. {language === "uz" ? "Ism" : "Имя"}
        </p>
        <div
          className={`${style.flexBetween} sm:gap-2 gap-6 !items-start border-2 w-full p-7`}
        >
          {inputs.map((item, idx) => (
            <div
              key={idx}
              className={`${style.flexCol} justify-start lg:w-[30%] sm:w-[45%] w-full gap-2 !items-start`}
            >
              <label className={`w-full ${style.p}`}>
                {item.label[language]}
              </label>
              <input
                className="border-2 w-full outline-none rounded-md p-2"
                type={item.type}
                name={item.name}
                onChange={handleChange}
                value={formData[item.name] || ""}
                disabled={
                  (item.name === "firstName" && formData.noFirstName) ||
                  (item.name === "middleName" && formData.noMiddleName)
                }
              />
              {item.type2 && (
                <div className={`flex items-center gap-2`}>
                  <input
                    className="cursor-pointer"
                    name={item.name2}
                    type={item.type2}
                    checked={formData[item.name2] || false}
                    onChange={handleChange}
                  />
                  <label>{item.label2[language]}</label>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
