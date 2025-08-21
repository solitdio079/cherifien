import * as React from "react";
import Layout from "../components/Layout";

import HeroSlider from "../components/HeroSlider";
import heroBg3 from "../images/heroBg1.jpeg";
import welcomeImg from "../images/about.png";
import Stats from "../components/Stats";
import ScrollGallery from "../components/ScrollGallery";
import Team from "../components/Team";
import Seo from "../components/Seo";
export default function About() {
  return (
    <Layout>
      <HeroSlider heroBg={heroBg3}>
        <h1 className="text-white intersect:motion-preset-slide-right intersect:motion-delay-[400ms] intersect:motion-ease-spring-bouncier relative z-1 text-5xl leading-[1.15] font-bold max-md:text-4xl md:max-w-3xl md:text-balance">
          <span className="text-primary bg-base-100">
            Qui sommes nous?
          </span>
        </h1>
        <p className="bg-base-200 p-1 text-lg max-w-3xl intersect:motion-preset-slide-right intersect:motion-delay-[600ms] intersect:motion-ease-spring-bouncier">
        Aviculture-Pisciculture-Elevage-Fruits & légumes
        </p>
      </HeroSlider>
      <div className="bg-base-200 flex py-8 sm:py-16 lg:py-12">
        <div className="grid gap-6 lg:grid-cols-2  px-10 lg:px-20 mb-12 motion-translate-y-in-100 motion-blur-in-md">
          <div className="relative">
            <span className="absolute z-2 intersect:motion-preset-slide-left intersect:motion-delay-[800ms] intersect:motion-ease-spring-bouncier font-bold text-primary p-5 text-2xl  bg-white text-bold w-fit bottom-0 lg:bottom-15 right-0 lg:-right-2">
              Aviculture <br /> Pisciculture <br /> élevage <br /> fruits & legumes
            </span>
            <img
              className="rounded-lg intersect:motion-preset-slide-left intersect:motion-delay-[1000ms] intersect:motion-ease-spring-bouncier"
              src={welcomeImg}
              alt=""
            />
          </div>
          <div>
            <div className="space-y-4 mb-12">
              <span className="uppercase text-primary text-4xl font-bold lg:text-6xl intersect:motion-preset-slide-right intersect:motion-delay-[200ms] intersect:motion-ease-spring-bouncier">
                {" "}
                A Propos{" "}
              </span>
              <h2 className="text-base-content text-2xl md:text-3xl lg:text-4xl intersect:motion-preset-slide-left intersect:motion-delay-[400ms] intersect:motion-ease-spring-bouncier">
                un peu plus sur nous
              </h2>
              <p className="text-base-content/80 text-xl intersect:motion-preset-slide-right intersect:motion-delay-[500ms] intersect:motion-ease-spring-bouncier">
                Avec une capacité actuelle de 4500 poules pondeuses, 20 000
                poissons, une centaine de bovins-ovins, 680 orangers, 1334
                citronniers, et une grande production maraichère, l’entreprise
                emploie 10 personnes à temps plein dont 3 femmes et des ouvriers
                saisonniers. La production est respectueuse de l’environnement
                et des partenariats sont établis avec des fournisseurs de
                matières et des distributeurs d’œufs, restaurants et hôtels et
                femmes revendeuses de produits agricoles. Nous valeurs sont
                l’innovation, la création de valeur sur nos produits,
                l’authenticité, la durabilité par la pratique écologique,
                l’accessibilité et l’intégration sociale et les impacts
                socio-économiques et environnementaux. Pour améliorer
                l’écosystème environnementale, nous avons planté plus environs
                1000 anacardiers à l’intérieur de la clôture de la ferme sur les
                20hectares. La production maraichère concerne essentiellement
                l’oignon, la tomate, et le piment.
              </p>
            </div>

            <a
              href="#"
              className="btn btn-md btn-primary  btn-gradient intersect:motion-preset-slide-right intersect:motion-delay-[600ms] intersect:motion-ease-spring-bouncier"
            >
              Plus d'Infos
              <span className="icon-[tabler--arrow-right] size-5 rtl:rotate-180"></span>
            </a>
          </div>
        </div>
      </div>
      <Stats/>
      <Team/>
      <ScrollGallery/>
    </Layout>
  );
}

export const Head = () => <Seo title={"A propos"}/>;
