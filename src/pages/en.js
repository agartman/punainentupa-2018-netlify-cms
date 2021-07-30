import React from "react";
import SectionPageFactory from "../components/queries/Queries";
import Layout from "../layouts";

const en = (props) => (
  <Layout language="en" shownav={true}>
    <SectionPageFactory {...props} language="en" />
  </Layout>
);

export default en;
