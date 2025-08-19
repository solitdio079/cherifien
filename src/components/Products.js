import * as React from "react";
import product1 from "../images/oeuf1.jpeg";
import product2 from "../images/poussin1.jpeg";
import product3 from "../images/heroBg1.jpeg";
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
];
export default function Products() {
  return (
    <div className="section">
      <div className="relative mx-auto w-fit mb-12">
        <h2 className="text-primary text-3xl font-bold md:text-4xl lg:text-6xl intersect:motion-preset-slide-right intersect:motion-delay-[200ms] intersect:motion-ease-spring-bouncier">
          Nos Produits et Services
        </h2>
        <span className="from-secondary/90 to-secondary/45 absolute start-0 top-9 lg:top-14 h-1 w-full rounded-full bg-gradient-to-r"></span>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {products.map((product) => (
          <div className={`card ${product.id === 2 ? "mt-12": ""} intersect:motion-preset-slide-right intersect:motion-delay-[200ms] intersect:motion-ease-spring-bouncier card-border hover:border-primary h-full shadow-none`}>
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
      <div className="w-full mt-12 lg:mt-24 flex justify-center ">
      <a
        href="#"
        className="btn btn-md btn-primary btn-gradient intersect:motion-preset-slide-right intersect:motion-delay-[200ms] intersect:motion-ease-spring-bouncier"
      >
        Plus d'Infos
        <span className="icon-[tabler--arrow-right] size-5 rtl:rotate-180"></span>
      </a>
      </div>
      
    </div>
  );
}
