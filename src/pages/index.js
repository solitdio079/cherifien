import * as React from "react"
import Layout from "../components/Layout"
import SwiperComponent from "../components/Swiper"
import Welcome from "../components/Welcome"
import Values from "../components/Values"
export default function IndexPage() {
  return (
    <Layout>
     <SwiperComponent/>
     <Values/>
     <Welcome/>
    </Layout>
  )
}

export const Head = () => <title>Home Page</title>
