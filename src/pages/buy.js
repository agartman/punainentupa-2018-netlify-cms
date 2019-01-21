import React from "react";
import Layout from "../layouts";
import Content from "../components/Content";
import "../css/shop.scss";
import LeftArrow from "../img/left.png";
import Link from "gatsby-link";

export default () => {
  return (
    <Layout language="en" shownav={false} shop={true}>
      <Content
        className={`section angled hero bg-red blog-hero`}
        content={"Buy consulting"}
      />
      <div className="shop">
        <p>
          Longer periods of work I do by contract. However here you can buy
          individual workshop days.
        </p>
        <div className="shop-controls">
          <p>
            <strong>Workshop day 1500€</strong> + VAT
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
              data-item-name={"Workshop day"}
              data-item-description={"On-premise workshop day"}
              data-item-custom1-name={"Note"}
              data-item-custom1-value={""}
              data-item-url={"https://thirsty-mcnulty-4b6910.netlify.com/buy"}
            >
              Add 1 workshop day to cart
            </a>
          </p>
          <p />
          <p>
            After purchase, please send me information what would you like to
            achieve during the workshop and let's go from there.<br />
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
