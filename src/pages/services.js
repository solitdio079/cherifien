import * as React from "react";
import Layout from "../components/Layout";

import HeroSlider from "../components/HeroSlider";
import heroBg4 from "../images/heroBg4.jpg";
import AllProducts from "../components/AllProducts";
import Formation from "../components/Formation";
import Seo from "../components/Seo";
export default function Services() {
  return (
    <Layout>
      <HeroSlider heroBg={heroBg4}>
        <h1 className="text-white intersect:motion-preset-slide-right intersect:motion-delay-[400ms] intersect:motion-ease-spring-bouncier relative z-1 text-5xl leading-[1.15] font-bold max-md:text-4xl md:max-w-3xl md:text-balance">
          <span className="text-primary bg-base-100">
            NOS PRODUİTS  <span className="text-primary">et SERVICES</span>
          </span>
        </h1>
        <p className="bg-base-200 p-1 text-lg max-w-3xl intersect:motion-preset-slide-right intersect:motion-delay-[600ms] intersect:motion-ease-spring-bouncier">
        Aviculture-Pisciculture-Elevage-Fruits & légumes
        </p>
      
       
      </HeroSlider>

      <AllProducts/>
      <Formation/>
    </Layout>
  );
}

export const Head = () => <Seo title={"Produits et Services"}/>;
