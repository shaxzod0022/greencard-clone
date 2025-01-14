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
    <div className="max-w-[1600px] mx-auto">
      <CheckAnketa />
      <AboutUs />
      <News />
      <Questions />
      <GreenCardInfo />
    </div>
  );
};

export default Home;
