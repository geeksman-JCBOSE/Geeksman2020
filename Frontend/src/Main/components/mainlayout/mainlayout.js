import React from "react";
import Navbar from "./mainlayoutcomp/navbar/navbar";
import Corousel from "./mainlayoutcomp/carousal/carousal";
import About from "./mainlayoutcomp/about/about";
import Footer from "./mainlayoutcomp/footer/footer";
import Alumni from "./mainlayoutcomp/alumni/alumni";
class MainLayout extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <div className="MainLayout">
        <Navbar />
        <Corousel />
        <About />
        <Alumni />
        <Footer />
      </div>
    );
  }
}

export default MainLayout;
