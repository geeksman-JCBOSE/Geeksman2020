import React, { useState } from "react";
import Navbar from "./mainlayoutcomp/navbar/navbar";
import Corousel from "./mainlayoutcomp/carousal/carousal";
import About from "./mainlayoutcomp/about/about";
import Footer from "./mainlayoutcomp/footer/footer";
import Alumni from "./mainlayoutcomp/alumni/alumni";

function MainLayout() {
  return (
    <>
      <Navbar />
      <Corousel />
      <About />
      <Alumni />
      <Footer />
    </>
  );
}

export default MainLayout;
