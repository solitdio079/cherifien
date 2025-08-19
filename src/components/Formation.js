import * as React from "react";
import formationBg from "../images/formation.jpeg";
export default function Formation() {
  return (
    <div className="relative section">
        <div className="flex justify-center items-center flex-col gap-5 mx-auto mb-12 w-fit mb-12">
          <h2 className="text-base-content text-primary text-3xl font-bold md:text-4xl lg:text-6xl intersect:motion-preset-slide-right intersect:motion-delay-[200ms] intersect:motion-ease-spring-bouncier">
            Nos Formations
          </h2>
          <p className="text-base-content text-md md:text-lg lg:text-xl intersect:motion-preset-slide-left intersect:motion-delay-[300ms] intersect:motion-ease-spring-bouncier">
          Nous faisons aussi de l’appui conseils, la formation et l’accompagnement technique des agriculteurs
          </p>
        </div>
      <div className="p-10 left-10 z-4 mx-auto  grid md:grid-cols-2 gap-6">
        <div className="h-full intersect:motion-preset-slide-right intersect:motion-delay-[200ms] intersect:motion-ease-spring-bouncier">
            <div className="bg-primary p-5 border-2 border-white text-2xl text-white flex justify-center">
            Formations pratiques

            </div>
          <ul class="menu border-2">
            <li>
              <a href="#">
                <span class="icon-[tabler--check] size-5"></span>
                Production agricole : préparation du sol, compréhension des calendriers, pépinières, système d’irrigation adapté aux cultures, agroforesterie, culture maraîchère en plein et hors sol etc.

              </a>
            </li>
            <li>
              <a href="#">
                <span class="icon-[tabler--check] size-5"></span>
                Gestion durable des terres, fertilité, compostage

              </a>
            </li>
            <li>
              <a href="#">
                <span class="icon-[tabler--check] size-5"></span>
                Élevage intensif et extensif : aviculture, gestion des troupeaux, santé animale

              </a>
            </li>
            <li>
              <a href="#">
                <span class="icon-[tabler--check] size-5"></span>
                Environnement et changement climatique

              </a>
            </li>
          </ul>
        </div>
        <div className="h-full intersect:motion-preset-slide-left intersect:motion-delay-[400ms] intersect:motion-ease-spring-bouncier">
            <div className="bg-primary p-5 border-2 border-white text-2xl text-white flex justify-center">
            Formations entrepreneuriales

            </div>
          <ul class="menu border-2">
            <li>
              <a href="#">
                <span class="icon-[tabler--check] size-5"></span>
                Initiation et développement de capacités entrepreneuriales


              </a>
            </li>
            <li>
              <a href="#">
                <span class="icon-[tabler--check] size-5"></span>
                Compréhension de l’environnement des affaires (niveau micro)

              </a>
            </li>
            <li>
              <a href="#">
                <span class="icon-[tabler--check] size-5"></span>
                Élaboration de business plans pour petits projets agricoles
              </a>
            </li>
            <li>
              <a href="#">
                <span class="icon-[tabler--check] size-5"></span>
                Education financière et base comptable adaptée au secteur agricole

              </a>
            </li>
            <li>
              <a href="#">
                <span class="icon-[tabler--check] size-5"></span>
                Stratégie de commercialisation et d’accès aux marchés locaux.
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
