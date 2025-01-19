import React from "react";
import {
  AboutUs,
  CheckAnketa,
  GreenCardInfo,
  News,
  Questions,
} from "../components";
const Home = () => {
  return (
    <>
      <CheckAnketa />
      <AboutUs />
      <News />
      <Questions />
      <GreenCardInfo />
    </>
  );
};

export default Home;
