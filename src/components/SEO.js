import React from "react";
import { Helmet } from "react-helmet";

export default ({ article, title, description, slug, shop = false }) => {
  const seo = {
    title: title || "Atte Gartman",
    description:
      description || "Full stack web -kehittäjä ja järjestelmäarkkitehti",
    image: "https://punainentupa.fi/img/ogimage.png",
    url: `https://punainentupa.fi${slug ? slug : ""}`
  };
  return (
    <>
      <Helmet
        title={seo.title}
        titleTemplate={"%s - Punainen Tupa Solutions Oy"}
        script={
          shop && [
            {
              type: "text/javascript",
              url: "",
              id: "snipcart",
              "data-api-key":
                "OTk5YTUzOTItZWIwNC00NWM5LWEyYWUtMDBlYWU5MTMxNjRhNjM2ODM2NjcyNzkyODMzNjUw",
              src: "https://cdn.snipcart.com/scripts/2.0/snipcart.js"
            },
            {
              type: "text/javascript",
              src:
                "https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"
            }
          ]
        }
      >
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
};
