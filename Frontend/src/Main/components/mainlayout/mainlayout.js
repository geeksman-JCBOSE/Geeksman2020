import React, { Suspense } from "react";
import Navbar from "./mainlayoutcomp/navbar/navbar";
import Corousel from "./mainlayoutcomp/carousal/carousal";
import About from "./mainlayoutcomp/about/about";
import Footer from "./mainlayoutcomp/footer/footer";
import Alumni from "./mainlayoutcomp/alumni/alumni";

function MainLayout() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar />
        <Corousel />
        <About />
        <Alumni />
        <Footer />
      </Suspense>
    </>
  );
}

export default MainLayout;
