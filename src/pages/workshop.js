import React from "react";
import Workshop from "../components/Workshop";
import "../css/shop.scss";
const englishButtonTexts = {
  buyTitle: "Buy consulting",
  descriptionContract:
    "Longer periods of work I do by contract. However here you can buy individual workshop days.",
  descriptionWorkshop:
    "On a workshop day, I'll join your team in the morning, on-site.",
  productName: "Workshop day 1500€",
  VAT: "VAT",
  addToCart: "Add an active workshop day to cart",
  afterPurchase:
    "After purchase, please send me information what would you like to achieve during the workshop and let's go from there."
};

export default () => <Workshop language="en" texts={englishButtonTexts} />;
