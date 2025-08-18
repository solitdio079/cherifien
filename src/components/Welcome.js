import * as React from "react";
import welcomeImg from "../images/welcome.png"
export default function Welcome() {
  return (
    <>
      <div className="bg-base-200 py-8 sm:py-16 lg:py-24">
        <div className="grid gap-6 lg:grid-cols-2  px-10 lg:px-20 mb-12 motion-translate-y-in-100 motion-blur-in-md">
          <div>
            <div className="space-y-4 mb-12">
              <span className="uppercase text-primary text-4xl font-bold lg:text-6xl intersect:motion-preset-slide-right intersect:motion-delay-[200ms] intersect:motion-ease-spring-bouncier">
                {" "}
                Bienvenue{" "}
              </span>
              <h2 className="text-base-content text-2xl md:text-3xl lg:text-4xl intersect:motion-preset-slide-left intersect:motion-delay-[400ms] intersect:motion-ease-spring-bouncier">
                Notre Entreprise en bref
              </h2>
              <p className="text-base-content/80 text-xl intersect:motion-preset-slide-right intersect:motion-delay-[500ms] intersect:motion-ease-spring-bouncier">
                CHERIFIEN AGROBUSINESS est une entreprise agricole malienne
                spécialisée dans la production d’élevage (aviculture,
                pisciculture, embouche bovine-ovine) et de fruits & légumes.
                L’activité a démarré en 2018 avec la production de volailles
                locales améliorées et aujourd’hui la ferme s’étend sur une
                surface de 20ha avec et dispose des infrastructures nécessaires
                pour la production dans les conditions meilleures.
              </p>
            </div>

            <a href="#" className="btn btn-md btn-primary  btn-gradient intersect:motion-preset-slide-right intersect:motion-delay-[600ms] intersect:motion-ease-spring-bouncier">
              Plus d'Infos
              <span className="icon-[tabler--arrow-right] size-5 rtl:rotate-180"></span>
            </a>
          </div>
          <div className="relative">
            <span className="absolute z-2 intersect:motion-preset-slide-left intersect:motion-delay-[800ms] intersect:motion-ease-spring-bouncier font-bold text-primary p-5 text-2xl  bg-white text-bold w-fit bottom-0 lg:bottom-25 left-0 lg:-left-10">
            Aviculture <br/> Pisciculture <br/> Embouche <br/> Bovine-ovine 
            </span>
            <img
              className="rounded-lg intersect:motion-preset-slide-left intersect:motion-delay-[1000ms] intersect:motion-ease-spring-bouncier"
              src={welcomeImg}
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}
