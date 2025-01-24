import React, { useState } from "react";
import { style } from "../../util/style";
import { useDispatch, useSelector } from "react-redux";
import { updateInput } from "../../store/anketaData";

const mailAddress = [
  {
    label: { uz: "a. E'tibor (ixtiyoriy)", ru: "a. Внимание (необязательно)" },
    name: "inCareOf",
  },
  {
    label: { uz: "b. Manzil, 1-qatorda", ru: "b. Адрес, строка 1" },
    name: "address_1",
  },
  {
    label: {
      uz: "c. Manzil, 2-qatorda (ixtiyoriy)",
      ru: "c. Адрес, строка 2 (необязательно)",
    },
    name: "address_2",
  },
  {
    label: { uz: "d. Shahar/Qishloq", ru: "d. Город/Поселок" },
    name: "cityTown",
  },
  {
    label: {
      uz: "e. Tuman/Okrug/Viloyat/Davlat",
      ru: "e. Район/Графство/Провинция/Штат",
    },
    name: "regions",
  },
  {
    label: {
      uz: "f. Pochta indeksi/Pochta kodi",
      ru: "f. Почтовый индекс/Почтовый код",
    },
    name: "mailCode",
  },
];

const MailAddress = () => {
  const language = useSelector((state) => state.language.language);
  const toggle = useSelector((i) => i.currentBtn.current);
  const mailAddressStore = useSelector((i) => i.form.data.mailingAddress);
  const dispatch = useDispatch();
  const [isMailCodeUnavailable, setIsMailCodeUnavailable] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(
      updateInput({
        key: "mailingAddress",
        name: name,
        value: value,
      })
    );
  };
  const handleCheckboxChange = (e) => {
    const isChecked = e.target.checked;
    setIsMailCodeUnavailable(isChecked);
    dispatch(
      updateInput({
        key: "mailingAddress",
        name: "mailCode",
        value: isChecked ? false : "",
      })
    );
  };

  return (
    <div className={`w-full rounded-md`}>
      <p className={`${style.p} rounded-t-md p-3 bg-gray-200`}>
        6. {language === "uz" ? "Pochta manzili" : "Почтовый адрес"}
      </p>
      <div
        className={`${style.flexBetween} sm:gap-2 gap-6 !items-start border-2 w-full p-7`}
      >
        <div
          className={`${style.flexCol} justify-start md:w-[80%] w-full gap-2 !items-start`}
        >
          {mailAddress.map((item, idx) => (
            <div
              key={idx}
              className={`${style.flexCol} gap-2 !items-start w-full sm:w-[80%]`}
            >
              <label className={`${style.p}`}>{item.label[language]}</label>
              {toggle ? (
                <input
                  type="text"
                  name={item.name}
                  className="w-full border-2 outline-none p-2 rounded-md"
                  onChange={handleChange}
                  value={mailAddressStore[item.name] || ""}
                  disabled={item.name === "mailCode" && isMailCodeUnavailable}
                />
              ) : (
                <p className={`${style.p}`}>
                  {mailAddressStore[item.name] || ""}
                </p>
              )}
              {toggle && item.name === "mailCode" && (
                <div className="flex items-center gap-2 flex-wrap">
                  <input
                    type="checkbox"
                    className="cursor-pointer"
                    checked={isMailCodeUnavailable}
                    onChange={handleCheckboxChange}
                  />
                  <label>
                    {language === "uz"
                      ? "Pochta indeksi/Pochta kodi mavjud emas"
                      : "Почтовый индекс/почтовый код недоступен"}
                  </label>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MailAddress;
