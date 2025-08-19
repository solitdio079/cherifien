import * as React from "react";
import product1 from "../images/oeuf1.jpeg";
import product2 from "../images/poussin1.jpeg";
import product3 from "../images/heroBg1.jpeg";
import carpes from "../images/carpes.jpg";
import citrons from    "../images/oranges.jpg"
import oranges from "../images/lemon.jpg"
import etangs from "../images/etangs.jpg"
import papaye from  "../images/papayes.jpg"
import piment from  "../images/piments.jpg"
import silures from "../images/silures.jpg"
import oignons from     "../images/oignons.jpg"
import tomate from  "../images/tomates.jpg"
import { Link } from "gatsby";
const products = [
  {
    content: "Œufs de table gros calibre et conservables longtemps",
    productImg: product1,
    id:1
  },
  { content: "Poussins d’un jour", productImg: product2,id:2 },
  
  {
    content: "Poules reformées et poulets locaux améliorés",
    productImg: product3,
    id:3
  },
  {
    content: "Citrons",
    productImg: citrons,
    id:4
  },
  {
    content: "Orange",
    productImg: oranges,
    id:5
  },
  {
    content: "Papayes",
    productImg: papaye,
    id:6
  },
  {
    content: "Etangs de Pisciculture",
    productImg: etangs,
    id:7
  },
  {
    content: "Silures",
    productImg: silures,
    id:8
  },
  {
    content: "Carpes",
    productImg: carpes,
    id:9
  },
  {
    content: "Piments",
    productImg: piment,
    id:10
  },
  {
    content: "Oignons",
    productImg: oignons,
    id:11
  },
  {
    content: "Tomates",
    productImg: tomate,
    id:12
  },
];
export default function AllProducts() {
  return (
    <div className="section">
    
      <div className="grid md:grid-cols-3 gap-6 ">
        {products.map((product) => (
          <div className={`card ${(product.id-2)%3 === 0 ? "md:mt-12": ""} intersect:motion-preset-slide-right intersect:motion-delay-[200ms] intersect:motion-ease-spring-bouncier card-border hover:border-primary h-full shadow-none`}>
            <figure className="bg-base-200 pt-2">
              <img
                src={product.productImg}
                alt="Jayden Lipshultz"
                className="h-60 w-auto"
              />
            </figure>
            <div className="card-body gap-0.5 mx-auto text-center">
              <h3 className="text-primary text-2xl  text-center text-lg font-bold">
                {product.content}
              </h3>
            </div>
          </div>
        ))}
      </div>
     
      
    </div>
  );
}
