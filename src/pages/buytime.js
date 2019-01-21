import React from "react";
import Layout from "../layouts";
import Content from "../components/Content";
import Helmet from "react-helmet";

export default props => {
  return (
    <Layout language="en" shownav={false}>
      <Helmet
        htmlAttributes={{ lang: "en" }}
        meta={[{ name: "description", content: 'Buy consulting time' }]}
        title={'Punainen Tupa Solutions Oy website - Buy time'}
        link={[
          {
            href: "https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css",
            rel: "stylesheet",
            type: "text/css"
          }
        ]}
        script={[
          {
            type: "text/javascript",
            url: "",
            id: "snipcart",
            "data-api-key": "OTk5YTUzOTItZWIwNC00NWM5LWEyYWUtMDBlYWU5MTMxNjRhNjM2ODM2NjcyNzkyODMzNjUw",
            src: "https://cdn.snipcart.com/scripts/2.0/snipcart.js"
          },
          {
            type: "text/javascript",
            src:
              "https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"
          }
        ]}
      />
      <Content
        className={`section angled hero bg-red blog-hero`}
        content={"Buy time"}
      />
      <div className="blog-post">
        <h3>Need some extra hands now?</h3>
        <p>
          Do you need help with sales proposal? Or do you need help in
          evaluating an offer? How about an Azure PaaS solution architecture?
        </p>
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
        href='#' 
        className='snipcart-add-item buyBtn'
        data-item-id={'time1h'}
        data-item-price={110}
        //data-item-image={choosenImgSrc}
        data-item-name={'1h of work'}
        data-item-description={'1h of work'}
        data-item-custom1-name={'onpremise'}
        data-item-custom1-value={true}
        data-item-url={"https://thirsty-mcnulty-4b6910.netlify.com/buytime"}>
        Buy for 110$
    </a>
        
      </div>
    </Layout>
  );
};
