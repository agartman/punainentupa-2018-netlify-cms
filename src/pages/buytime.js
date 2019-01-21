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
            <strong>Tuntihinta 150€</strong> + alv
          </p>

          <p>
            <a
              id="buyButton"
              href="#"
              className="snipcart-add-item btn btn-1"
              data-item-id={"time1h"}
              data-item-price={150}
              data-item-image={
                "https://punainentupa.fi/img/punainentupalogo.svg"
              }
              data-item-name={"1h aikaa"}
              data-item-description={"1h of work"}
              data-item-custom1-name={"Viesti"}
              data-item-custom1-value={""}
              data-item-url={"https://punainentupa.fi/buytime"}
            >
              Osta 1-4 tuntia
            </a>
          </p>
          <p>
            <strong>Päivähinta 1000€</strong> + alv
          </p>
          <p>
            <a
              id="buyButton"
              href="#"
              className="snipcart-add-item btn btn-1"
              data-item-id={"time1day"}
              data-item-price={1000}
              data-item-image={
                "https://punainentupa.fi/img/punainentupalogo.svg"
              }
              data-item-name={"1 päivä aikaa"}
              data-item-description={"1 day of work"}
              data-item-custom1-name={"Viesti"}
              data-item-custom1-value={""}
              data-item-url={"https://punainentupa.fi/buytime"}
            >
              Osta 1 päivä
            </a>
          </p>
          <p>Matkakulut alle 1h matkasta 0€.</p>
          <p>
            Voit tarvittaessa lähettää Skype-linkin, NDA:t tai muut
            yksityiskohdat sähköpostilla meiliin{" "}
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
