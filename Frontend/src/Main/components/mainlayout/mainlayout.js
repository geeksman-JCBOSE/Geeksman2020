import React, { Suspense } from "react";
import Navbar from "./mainlayoutcomp/navbar/navbar";
import Corousel from "./mainlayoutcomp/carousal/carousal";
import About from "./mainlayoutcomp/about/about";
import Footer from "./mainlayoutcomp/footer/footer";
import Alumni from "./mainlayoutcomp/alumni/alumni";
import Timeline from "./mainlayoutcomp/timeline/timeline";

function MainLayout() {
  return (
    <>
      <Navbar />
      <Corousel />
      <Timeline />
      <About />
      <Alumni />
      <Footer />
    </>
  );
}

export default MainLayout;
