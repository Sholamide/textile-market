import React from "react";
import Footer from "./Footer";
import SectionContainer from "./SectionContainer";
import Head from "next/head";

const LayoutWrapper = () => {
  return (
    <SectionContainer>
      <Head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta name="description" content="Description" />
        <meta name="keywords" content="Keywords" />
        <title>Mobile Textile Market</title>
      </Head>
      <div className="flex justify-center">
        <div></div>
        <Footer />
      </div>
    </SectionContainer>
  );
};

export default LayoutWrapper;
