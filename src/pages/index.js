import React from "react";
import SectionPageFactory from "../components/queries/Queries";
import Layout from "../layouts";

const root = (props) => (
  <Layout language="fi" shownav={true}>
    <SectionPageFactory {...props} language="fi" />
  </Layout>
);

export default root;
