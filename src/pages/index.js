import * as React from "react"
import Layout from "../components/Layout"
import SwiperComponent from "../components/Swiper"
export default function IndexPage() {
  return (
    <Layout>
     <SwiperComponent/>
    </Layout>
  )
}

export const Head = () => <title>Home Page</title>
