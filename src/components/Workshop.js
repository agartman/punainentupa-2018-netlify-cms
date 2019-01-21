import React from "react";
import Layout from "../layouts";
import Content from "./Content";
import "../css/shop.scss";
import LeftArrow from "../img/left.png";
import Link from "gatsby-link";

export default ({ language, texts }) => {
  return (
    <Layout language={language} shownav={false} shop={true}>
      <Content
        className={`section angled hero bg-red blog-hero`}
        content={texts.buyTitle}
      />
      <div className="shop">
        <p>{texts.descriptionContract}</p>
        <p>{texts.descriptionWorkshop}</p>
        <div className="shop-controls">
          <p>
            <strong>{texts.productName}</strong> + {texts.VAT}
          </p>
          <p>
            <a
              id="buyButton"
              href="#"
              className="snipcart-add-item btn btn-1"
              data-item-id={"time1day"}
              data-item-price={1500}
              data-item-image={
                "https://thirsty-mcnulty-4b6910.netlify.com/img/punainentupalogo.svg"
              }
              data-item-name={"Workshop / työpaja"}
              data-item-description={"On-premise workshop"}
              data-item-custom1-name={"Add a note / Lisää viesti"}
              data-item-custom1-value={""}
              data-item-url={"https://thirsty-mcnulty-4b6910.netlify.com/buy"}
            >
              {texts.addToCart}
            </a>
          </p>
          <p>
            {texts.afterPurchase}
            <br />
            <a href="mailto:atte@punainentupa.fi">atte@punainentupa.fi</a>
          </p>
        </div>
        <Link to="/" className="blog-footer">
          <img src={LeftArrow} className="arrow" />
        </Link>
      </div>
    </Layout>
  );
};
