import * as React from "react"
import Layout from "../components/Layout"
import SwiperComponent from "../components/Swiper"
import Welcome from "../components/Welcome"
export default function IndexPage() {
  return (
    <Layout>
     <SwiperComponent/>
     <Welcome/>
    </Layout>
  )
}

export const Head = () => <title>Home Page</title>
