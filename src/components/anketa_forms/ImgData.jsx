import React, { useState } from "react";
import { style } from "../../util/style";
import { Link } from "react-router";
import { useSelector } from "react-redux";

const ImgData = () => {
  const language = useSelector((state) => state.language);

  const contentUz = (
    <>
      <p>
        Fotosuratlar eDV ga kirish vaqtida topshirilishi kerak. Barcha
        spetsifikatsiyalarga mos kelmaydigan fotosuratlar, shu jumladan, lekin
        ular bilan cheklanmagan holda, fotosuratlarning yangiligi,
        fotosuratlarning tarkibi va qabul qilinishi mumkin bo'lmagan fon
        rasmlari butun arizani diskvalifikatsiya qilish uchun asosdir. Yuz
        xususiyatlarini o'zgartiradigan fotosuratlar bilan har qanday
        manipulyatsiya butun yozuvni diskvalifikatsiya qilish uchun asos
        bo'ladi.{" "}
        <Link
          to={`https://tsg.phototool.state.gov/photo`}
          target="_blank"
          className="text-blue-500 font-semibold"
        >
          Fotosurat vositasi
        </Link>{" "}
        sahifasidagi misollarga qarang.
      </p>
      <p>
        Raqamli tasvirning texnik tavsiflari va kompozitsion tavsiflari uchun
        2019-yilgi Diversity Immigrant Visa dasturi (DV-2019) boʻyicha
        yoʻriqnomaga qarang.
      </p>
      <p>Tasvirni kiritish uchun quyidagi usullardan birini ishlatasiz eDV:</p>
      <ul className="list-disc ml-10">
        <li>Yangi raqamli tasvirni oling.</li>
        <li>
          Taqdim etilgan fotosuratni skanerlash uchun raqamli skanerdan
          foydalaning.
        </li>
      </ul>
      <Link
        to={`https://tsg.phototool.state.gov/photo`}
        target="_blank"
        className="text-blue-500 font-semibold"
      >
        Fotosurat ko'rsatmalari/fotosurat vositasi sahifasiga havola
      </Link>
      <em>
        "Yangi rasmni tanlash" tugmasini bosish sizga topish va tanlash imkonini
        beradi fotosurat saqlanadigan fayl. Tanlangandan so'ng, nom ko'rsatiladi
        fayl va fotosurat. Agar fotosurat noto'g'ri bo'lsa, tugmani bosing Yangi
        faylni tanlash uchun "Yangi rasmni tanlang".
      </em>
    </>
  );

  const contentRu = (
    <>
      <p>
        Фотографии должны быть предоставлены во время подачи заявки в формате
        eDV. Фотографии, которые не соответствуют всем требованиям, включая,
        помимо прочего, новизну фотографий, композицию фотографий и неприемлемый
        фон, являются основанием для дисквалификации всей заявки. Любые
        манипуляции с фотографиями, изменяющие характеристики лица, являются
        основанием для дисквалификации всей заявки. См. примеры на странице.{" "}
        <Link
          to={`https://tsg.phototool.state.gov/photo`}
          target="_blank"
          className="text-blue-500 font-semibold"
        >
          Photo Tool
        </Link>
      </p>
      <p>
        Спецификации цифровых изображений и композиционные описания см. в
        «Руководстве по программе иммиграционных виз для диверсифицированных
        граждан» (DV-2019) 2019 года.
      </p>
      <p>
        Для ввода изображения в eDV вы будете использовать один из следующих
        методов:
      </p>
      <ul className="list-disc ml-10">
        <li>Сделайте новое цифровое изображение.</li>
        <li>
          Используйте цифровой сканер для сканирования предоставленной
          фотографии.
        </li>
      </ul>
      <Link
        to={`https://tsg.phototool.state.gov/photo`}
        target="_blank"
        className="text-blue-500 font-semibold"
      >
        Ссылка на фотоинструкции/страницу фотоинструментов
      </Link>
      <em>
        Нажатие кнопки «Выбрать новое фото» позволит вам найти и выбрать файл, в
        котором хранится фотография. После выбора отобразятся имя файла и
        фотография. Если фотография неверная, нажмите кнопку «Выбрать новое
        фото», чтобы выбрать новый файл.
      </em>
    </>
  );

  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file && (file.type === "image/jpeg" || file.type === "image/jpg")) {
      setImage(file);

      const previewUrl = URL.createObjectURL(file);
      setPreview(previewUrl);
    } else {
      alert(
        language === "uz"
          ? "Faqat JPEG formatdagi fayllarni yuklang."
          : "Загрузите только файлы в формате JPEG."
      );
    }
  };

  // const handleUpload = () => {
  //   if (!image) {
  //     alert(
  //       language === "uz"
  //         ? "Iltimos, avval rasmni yuklang."
  //         : "Пожалуйста, сначала загрузите фото."
  //     );
  //     return;
  //   }

  //   // Yuklangan faylni serverga yuborish uchun
  //   const formData = new FormData();
  //   formData.append("image", image);
  //   console.log(formData);

  //   // Fetch yoki axios yordamida serverga yuborish
  //   console.log("Yuborilgan fayl:", image.name);
  // };
  return (
    <div className="w-full rounded-md">
      <p className={`${style.p} rounded-t-md p-3 bg-gray-200`}>
        5.{" "}
        {language === "uz" ? "Qatnashuvchining surati" : "Фотография участника"}
      </p>
      <div
        className={`${style.flexCol} sm:gap-2 gap-6 !items-start border-2 w-full p-7`}
      >
        {language === "uz" ? contentUz : contentRu}
        <div
          className={`${style.flexCol} sm:gap-2 gap-6 !items-start w-full p-7`}
        >
          <div className="flex sm:justify-start justify-between sm:w-auto w-full items-center border-2 rounded-sm">
            <input
              type="text"
              className="outline-none px-2 sm:w-auto w-[65%]"
              value={image ? image.name : ""}
              readOnly
            />
            <label className="flex text-center items-center gap-2 px-4 py-1 bg-gray-400 text-white rounded-sm cursor-pointer hover:bg-gray-500">
              <span>
                {language === "uz" ? "Rasm tanlash" : "Выберите изображение"}
              </span>
              <input
                type="file"
                onChange={handleFileChange}
                className="hidden"
              />
            </label>
          </div>
          {preview && (
            <div className="mt-4">
              <p>{language === "uz" ? "Tanlangan rasm:" : "Выбранное фото:"}</p>
              <img
                src={preview}
                alt="Selected"
                accept=".jpeg, .jpg, .png"
                className="w-32 h-32 object-cover mt-2"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImgData;
