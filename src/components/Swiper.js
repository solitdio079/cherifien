// Import Swiper React components
import * as React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "gatsby";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import heroBg1 from "../images/heroBg3.jpeg";
import heroBg2 from "../images/heroBg2.jpeg";
import heroBg4 from "../images/heroBg4.jpg";
import HeroSlider from "./HeroSlider";

export default function SwiperComponent() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
        }}
        pagination={{
          el: "#containerForBullets",
          type: "bullets",
          bulletClass: "swiper-custom-bullet",
          bulletActiveClass: "swiper-custom-bullet-active",
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <div
          id="containerForBullets"
          className="flex justify-center gap-3"
        ></div>
        <SwiperSlide>
          <HeroSlider heroBg={heroBg4}>
            <h1 className="text-white intersect:motion-preset-slide-right intersect:motion-delay-[400ms] intersect:motion-ease-spring-bouncier relative z-1 text-5xl leading-[1.15] font-bold max-md:text-4xl md:max-w-3xl md:text-balance">
              <span className="text-primary bg-base-100">
                CHERIFIEN{" "}
                <span className="text-primary bg-base-100">AGROBUSINESS</span>
              </span>
            </h1>
            <p className="bg-base-200 p-1 text-lg max-w-3xl intersect:motion-preset-slide-right intersect:motion-delay-[600ms] intersect:motion-ease-spring-bouncier">
              Aviculture-Pisciculture-Elevage-Fruits & légumes
            </p>

            <Link
              to="/about"
              className="btn btn-primary btn-gradient btn-lg intersect:motion-preset-slide-right intersect:motion-delay-[800ms] intersect:motion-ease-spring-bouncier"
            >
              A propos
              <span className="icon-[tabler--arrow-right] size-5 rtl:rotate-180"></span>
            </Link>
          </HeroSlider>
        </SwiperSlide>
        <SwiperSlide>
          <HeroSlider heroBg={heroBg1}>
            <h1 className="text-white intersect:motion-preset-slide-right intersect:motion-delay-[400ms] intersect:motion-ease-spring-bouncier relative z-1 text-5xl leading-[1.15] font-bold max-md:text-4xl md:max-w-3xl md:text-balance">
              <span className="text-primary bg-base-100">
                CHERIFIEN{" "}
                <span className="text-primary bg-base-100">AGROBUSINESS</span>
              </span>
            </h1>
            <p className="bg-base-200 p-1 text-lg max-w-3xl intersect:motion-preset-slide-right intersect:motion-delay-[600ms] intersect:motion-ease-spring-bouncier">
              Aviculture-Pisciculture-Elevage-Fruits & légumes
            </p>

            <Link
              to="/about"
              className="btn btn-primary btn-gradient btn-lg intersect:motion-preset-slide-right intersect:motion-delay-[800ms] intersect:motion-ease-spring-bouncier"
            >
              A propos
              <span className="icon-[tabler--arrow-right] size-5 rtl:rotate-180"></span>
            </Link>
          </HeroSlider>
        </SwiperSlide>
        <SwiperSlide>
          <HeroSlider heroBg={heroBg2}>
            <h1 className="text-white intersect:motion-preset-slide-right intersect:motion-delay-[400ms] intersect:motion-ease-spring-bouncier relative z-1 text-5xl leading-[1.15] font-bold max-md:text-4xl md:max-w-3xl md:text-balance">
              <span className="text-primary bg-base-100">
                CHERIFIEN{" "}
                <span className="text-primary bg-base-100">AGROBUSINESS</span>
              </span>
            </h1>
            <p className="bg-base-200 p-1 text-lg max-w-3xl intersect:motion-preset-slide-right intersect:motion-delay-[600ms] intersect:motion-ease-spring-bouncier">
              Aviculture-Pisciculture-Elevage-Fruits & légumes
            </p>

            <Link
              to="/about"
              className="btn btn-primary btn-gradient btn-lg intersect:motion-preset-slide-right intersect:motion-delay-[800ms] intersect:motion-ease-spring-bouncier"
            >
              A propos
              <span className="icon-[tabler--arrow-right] size-5 rtl:rotate-180"></span>
            </Link>
          </HeroSlider>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
