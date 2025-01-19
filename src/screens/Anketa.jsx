import React from "react";
import { style } from "../util/style";
import {
  BirthCity,
  BirthDate,
  ContinueBtn,
  EducationLevel,
  EmailAddress,
  FamilySituation,
  Gender,
  ImgData,
  MailAddress,
  NumberChildren,
  PersonalInfo,
  PhoneNum,
  SelectCountryToday,
} from "../components";
const Anketa = () => {
  return (
    <div
      className={`${style.flexCol} !items-start gap-8 w-full lg:px-[120px] md:px-[80px] sm:px-[50px] sm:py-10 p-5 lg:mt-28 sm:mt-[52px] mt-[70px]`}
    >
      <PersonalInfo />
      <Gender />
      <BirthDate />
      <BirthCity />
      <ImgData />
      <MailAddress />
      <SelectCountryToday />
      <PhoneNum />
      <EmailAddress />
      <EducationLevel />
      <FamilySituation />
      <NumberChildren />
      <ContinueBtn />
    </div>
  );
};

export default Anketa;
