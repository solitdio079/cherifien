import * as React from "react"
import Layout from "../components/Layout"
import SwiperComponent from "../components/Swiper"
import Welcome from "../components/Welcome"
import Values from "../components/Values"
import Products from "../components/Products"
import Stats from "../components/Stats"
export default function IndexPage() {
  return (
    <Layout>
     <SwiperComponent/>
     <Values/>
     <Welcome/>
     <Products/>
     <Stats/>
    </Layout>
  )
}

export const Head = () => <title>Home Page</title>
