import React from "react";
import Helmet from "react-helmet";
import "typeface-rubik";
import "typeface-josefin-sans";
import "../css/style.scss";
import Navbar from "../components/Navbar";
export default ({ children, language, className, shownav }) => (
  <div>
    <Helmet title="Atte Gartman - Punainen Tupa Solutions" />
    {shownav && <Navbar language={language} />}
    <div className={className}>{children}</div>
  </div>
);
