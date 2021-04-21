import React from "react";
import Footer from "./Footer";
import SectionContainer from "./SectionContainer";
import Head from "next/head";

const LayoutWrapper = () => {
  return (
    <SectionContainer>
      <Head>
        <title>Mobile Textile market</title>
      </Head>
      <div className="flex justify-center">
        <div></div>
        <Footer />
      </div>
    </SectionContainer>
  );
};

export default LayoutWrapper;
