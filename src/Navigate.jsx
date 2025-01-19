import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import {
  Anketa,
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
      <div className="max-w-[1600px] mx-auto">
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
          {/* Anketa toldirish */}
          <Route path="/anketa" element={<Anketa />} />
        </Routes>
        <AnketaBtnAndTitle />
        <Footer />
        <AnketaBtn
          className={`bg-green-500 active:bg-green-400 fixed bottom-8 z-40 right-8`}
        />
      </div>
    </BrowserRouter>
  );
};

export default Navigate;
