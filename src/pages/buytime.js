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
        content={"Osta konsultointia"}
      />
      <div className="shop">
        <p>
          Kiirettä tarjouksien tekemisen/arviointien kanssa? Voin varmasti
          auttaa. Haluaisitko arkkitehtuurikuvauksen nykytilastasi tai muuten
          vaan suuntaa antavaa neuvoa?
        </p>
        <div className="shop-controls">
          <p>
            <strong>Tuntihinta 110€</strong> + alv
          </p>
          <p>
            <a
              id="buyButton"
              href="#"
              className="snipcart-add-item btn btn-1"
              data-item-id={"time1h"}
              data-item-price={110}
              data-item-image={
                "https://punainentupa.fi/img/punainentupalogo.svg"
              }
              data-item-name={"1h aikaa"}
              data-item-description={"1h of work"}
              data-item-custom1-name={"Viesti"}
              data-item-custom1-value={""}
              data-item-url={
                "https://punainentupa.fi/buytime"
              }
            >
              Lisää 1h koriin
            </a>
          </p>
          <p>
            Voit tarvittaessa lähettää Skype-linkin, NDA:t tai muut
            yksityiskohdat sähköpostilla meiliin{" "}
            <a href="mailto:atte@punainentupa.fi">atte@punainentupa.fi</a>
          </p>
        </div>
        <Link to="/">
          <img src={LeftArrow} className="arrow" />
        </Link>
      </div>
    </Layout>
  );
};
