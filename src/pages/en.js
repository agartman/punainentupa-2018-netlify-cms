import React from "react";
import SectionPageFactory from "../components/queries/Queries";
import Layout from "../layouts";

export default props => (
  <Layout language="en" shownav={true}>
    <SectionPageFactory {...props} language="en" />
  </Layout>
);
