import * as React from "react"
import Layout from "../components/Layout"
import SwiperComponent from "../components/Swiper"
import Welcome from "../components/Welcome"
import Values from "../components/Values"
import Products from "../components/Products"
import Stats from "../components/Stats"
import Formation from "../components/Formation"
import Seo from "../components/Seo"
export default function IndexPage() {
  return (
    <Layout>
     <SwiperComponent/>
     <Values/>
     <Welcome/>
     <Products/>
     <Stats/>
     <Formation/>
     <div className="grid items-center gap-12 lg:grid-cols-1">
        <div>
          <div style={{ width: "100%" }}>
            <iframe
              width="100%"
              className="h-80 lg:h-[350px]"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3892.911917048306!2d-7.9344892248710215!3d12.653779887633114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xe51d3004d077799%3A0x5714d50eeae0f5dc!2sRond-point%20G%C3%A9n%C3%A9ral%20Abdoulaye%20Soumar%C3%A9!5e0!3m2!1sen!2str!4v1754921257508!5m2!1sen!2str"
            >
              <a href="https://www.mapsdirections.info/fr/calculer-la-population-sur-une-carte">
                Carte démographique
              </a>
            </iframe>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title={"Accueil"}/>;
