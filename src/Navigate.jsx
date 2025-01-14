import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import {
  Communication,
  Home,
  Informations,
  News,
  Question,
  Services,
} from "./screens";
import {
  AnketaBtn,
  AnketaBtnAndTitle,
  Footer,
  Head,
  Navbar,
  ScroolTop,
} from "./components";

const Navigate = () => {
  return (
    <BrowserRouter>
      <ScroolTop />
      <Navbar />
      <Head />
      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />
        {/* Xizmatlar */}
        <Route path="/services" element={<Services />} />
        {/* Yangiliklar */}
        <Route path="/news" element={<News />} />
        {/* Ma'lumotlar */}
        <Route path="/information" element={<Informations />} />
        {/* Savollar */}
        <Route path="/questions" element={<Question />} />
        {/* Aloqa */}
        <Route path="/communication" element={<Communication />} />
      </Routes>
      <AnketaBtnAndTitle />
      <Footer />
      <AnketaBtn
        title={`Anketa to'ldirish`}
        className={`bg-green-500 active:bg-green-400 fixed bottom-8 right-8`}
      />
    </BrowserRouter>
  );
};

export default Navigate;
