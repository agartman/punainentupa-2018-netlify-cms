import React from "react";
import Workshop from "../components/Workshop";
import "../css/shop.scss";

const finnishButtonTexts = {
  buyTitle: "Osta konsultointia",
  descriptionContract:
    "Pidemmät toimeksiannot sopimuksen mukaan. Yksittäisellä työpajalla on hyvä lähteä liikkeelle.",
  descriptionWorkshop: "Tulen paikan päälle, matkakulut sisältyy hintaan.",
  productName: "Työpajapäivä 1500€",
  VAT: "ALV",
  addToCart: "Lisää aktiivinen työpajapäivä koriin",
  afterPurchase:
    "Tilauksen jälkeen lähetä NDAt ja dokumentaatiota ja tietoja, mitä työpajan aikana haluaisit saada aikaiseksi. Tämä auttaa valmistautumisessa."
};

export default () => <Workshop language="fi" texts={finnishButtonTexts} />;
