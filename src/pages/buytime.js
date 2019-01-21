import React from "react";
import Layout from "../layouts";
import Content from "../components/Content";
import Helmet from "react-helmet";

export default props => {
  return (
    <Layout language="en" shownav={false} shop={true}>
    
      <Content
        className={`section angled hero bg-red blog-hero`}
        content={"Buy time"}
      />
      <div className="blog-post">
        <h3>Tarvitsetko lisäkäsiä heti?</h3>
        <p>
          Kiirettä tarjouksen kanssa? Haluaisitko arvion saamastasi
          tarjouksesta? Tilaa muutama tunti niin katsotaan. Ei jäykkiä
          toimeksiantosopimuksia.
        </p>
        <strong>110€ + VAT</strong>
        <p>
          <a
            style={{
              backgroundColor: "#212121",
              borderRadius: "5px",
              color: "#F5F5F5",
              fontWeight: "bold",
              paddingBottom: "15px",
              paddingTop: "15px",
              paddingRight: "35px",
              paddingLeft: "35px",
              fontSize: "24"
            }}
            id="buyButton"
            href="#"
            className="snipcart-add-item buyBtn"
            data-item-id={"time1h"}
            data-item-price={110}
            //data-item-image={choosenImgSrc}
            data-item-name={"1h aikaa"}
            data-item-description={"1h of work"}
            data-item-url={"https://thirsty-mcnulty-4b6910.netlify.com/buytime"}
          >
            Buy for 110$ga
          </a>
        </p>
      </div>
    </Layout>
  );
};
