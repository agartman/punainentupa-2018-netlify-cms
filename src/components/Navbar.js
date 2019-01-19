import React from "react";
import Link from "gatsby-link";

const revertedLanguage = language => (language === "fi" ? "en" : "fi");
export default ({ language }) => (
  <nav className="navbar is-transparent">
    <Link to={language === "fi" ? `/en/` : "/"}>
      <img
        className="hero--flag"
        src={`/img/${revertedLanguage(language)}.svg`}
      />
    </Link>
  </nav>
);
