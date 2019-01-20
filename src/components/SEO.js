import React from "react";
import { Helmet } from "react-helmet";
const seo = {
  title: "Atte Gartman - Punainen Tupa Solutions Oy",
  description: "Full stack web -kehittäjä ja järjestelmäarkkitehti",
  image: "https://punainentupa.fi/img/ogimage.png",
  url: `https://punainentupa.fi`
};

export default ({ article }) => (
    <>
      <Helmet title={seo.title}>
        <meta name="og:locale" content={"fi-FI"} />
        <meta name="og:locale:alternate" content={"en-GB"} />
        <meta name="description" content={seo.description} />
        <meta name="image" content={seo.image} />
        {seo.url && <meta property="og:url" content={seo.url} />}
        {(article ? true : null) && (
          <meta property="og:type" content="article" />
        )}
        {seo.title && <meta property="og:title" content={seo.title} />}
        {seo.description && (
          <meta property="og:description" content={seo.description} />
        )}
        {seo.image && <meta property="og:image" content={seo.image} />}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content={"@attegman"} />
        {seo.title && <meta name="twitter:title" content={seo.title} />}
        {seo.description && (
          <meta name="twitter:description" content={seo.description} />
        )}
        {seo.image && <meta name="twitter:image" content={seo.image} />}
      </Helmet>
    </>
);
