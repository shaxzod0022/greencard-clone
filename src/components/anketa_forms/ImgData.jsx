import React, { useState } from "react";
import { style } from "../../util/style";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateInput } from "../../store/anketaData";

const ImgData = () => {
  const language = useSelector((state) => state.language.language);
  const imgData = useSelector(
    (state) => state.form?.data?.userPhoto?.userPhoto || {}
  );
  const toggle = useSelector((i) => i.currentBtn.current);
  const dispatch = useDispatch();
  const [preview, setPreview] = useState(null);

  const contentUz = (
    <>
      <p>
        Fotosuratlar eDV ga kirish vaqtida topshirilishi kerak. Barcha
        spetsifikatsiyalarga mos kelmaydigan fotosuratlar arizani
        diskvalifikatsiya qilishga olib kelishi mumkin.{" "}
        <Link
          to="https://tsg.phototool.state.gov/photo"
          target="_blank"
          className="text-blue-500 font-semibold"
        >
          Fotosurat vositasi
        </Link>{" "}
        sahifasiga qarang.
      </p>
      <p>Tasvirni kiritish uchun quyidagi usullardan birini ishlating:</p>
      <ul className="list-disc ml-10">
        <li>Yangi raqamli tasvirni oling.</li>
        <li>
          Taqdim etilgan fotosuratni skanerlash uchun raqamli skanerdan
          foydalaning.
        </li>
      </ul>
    </>
  );

  const contentRu = (
    <>
      <p>
        Фотографии должны быть предоставлены во время подачи заявки.{" "}
        <Link
          to="https://tsg.phototool.state.gov/photo"
          target="_blank"
          className="text-blue-500 font-semibold"
        >
          Photo Tool
        </Link>
      </p>
      <p>Для ввода изображения используйте один из следующих методов:</p>
      <ul className="list-disc ml-10">
        <li>Сделайте новое цифровое изображение.</li>
        <li>
          Используйте цифровой сканер для сканирования предоставленной
          фотографии.
        </li>
      </ul>
    </>
  );

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file && file.type === "image/jpeg") {
      const previewUrl = URL.createObjectURL(file);
      setPreview(previewUrl);
      dispatch(
        updateInput({
          key: "userPhoto",
          name: "userPhoto",
          value: { name: file.name, size: file.size, type: file.type },
        })
      );
    } else {
      alert(
        language === "uz"
          ? "Faqat JPEG formatdagi fayllarni yuklang."
          : "Загрузите только файлы в формате JPEG."
      );
    }
  };

  return (
    <div className="w-full rounded-md">
      <p className={`${style.p} rounded-t-md p-3 bg-gray-200`}>
        5.{" "}
        {language === "uz" ? "Qatnashuvchining surati" : "Фотография участника"}
      </p>
      {toggle ? (
        <div
          className={`${style.flexCol} sm:gap-2 gap-6 !items-start border-2 w-full p-7`}
        >
          {language === "uz" ? contentUz : contentRu}
          <div className={`${style.flexCol} gap-6 !items-start w-full p-7`}>
            <div className="flex justify-between lg:w-[50%] w-full items-center border-2 rounded-sm">
              <input
                type="text"
                className="outline-none px-2 w-[78%]"
                value={imgData?.name || ""}
                readOnly
              />
              <label className="flex items-center gap-2 px-4 py-1 bg-gray-400 text-white rounded-sm cursor-pointer hover:bg-gray-500">
                <span className="text-center">
                  {language === "uz" ? "Rasm tanlash" : "Выберите изображение"}
                </span>
                <input
                  type="file"
                  onChange={handleFileChange}
                  className="hidden"
                  accept="image/jpeg"
                />
              </label>
            </div>
            {preview && (
              <div className="mt-4">
                <p>
                  {language === "uz" ? "Tanlangan rasm:" : "Выбранное фото:"}
                </p>
                <img
                  src={preview}
                  alt="Selected"
                  className="w-32 h-32 object-cover mt-2"
                />
              </div>
            )}
          </div>
        </div>
      ) : (
        <p className={`border-2 w-full p-7 ${style.p}`}>
          {imgData?.name
            ? `${language === "uz" ? "Rasm yuklandi" : "Изображение загружено"}`
            : `${
                language === "uz"
                  ? "Rasm yuklanmadi"
                  : "Изображение не удалось загрузить"
              }`}
        </p>
      )}
    </div>
  );
};

export default ImgData;
