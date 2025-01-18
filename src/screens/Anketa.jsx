import React from "react";
import { style } from "../util/style";
import {
  BirthCity,
  BirthDate,
  Gender,
  ImgData,
  MailAddress,
  PersonalInfo,
  SelectCountryToday,
} from "../components";
const Anketa = () => {
  return (
    <div
      className={`${style.flexCol} gap-8 w-full lg:px-[120px] md:px-[80px] sm:px-[50px] sm:py-10 p-5`}
    >
      <PersonalInfo />
      <Gender />
      <BirthDate />
      <BirthCity />
      <ImgData />
      <MailAddress />
      <SelectCountryToday />
    </div>
  );
};

export default Anketa;
