import React from "react";
import "typeface-rubik";
import "typeface-josefin-sans";
import "../css/style.scss";
import Navbar from "../components/Navbar";
import SEO from "../components/SEO";
export default ({ children, language, className, shownav, article, title, description, slug, shop }) => (
  <div>
    <SEO article={article} title={title} description={description} slug={slug} shop={shop} />
    {shownav && <Navbar language={language} />}
    <div className={className}>{children}</div>
  </div>
);
