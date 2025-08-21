import * as React from "react"

export default function Stats(){
    return(<div className="section bg-base-200">
     <dl class=" grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div class="flex flex-col-reverse gap-1 intersect:motion-preset-slide-right intersect:motion-delay-[200ms] intersect:motion-ease-spring-bouncier">
          <dt class="text-base/7 text-gray-300">Visites</dt>
          <dd class="text-4xl font-semibold tracking-tight text-white">120+</dd>
        </div>
        <div class="flex flex-col-reverse gap-1 intersect:motion-preset-slide-right intersect:motion-delay-[200ms] intersect:motion-ease-spring-bouncier">
          <dt class="text-base/7 text-gray-300">Jeunes formés 
          </dt>
          <dd class="text-4xl font-semibold tracking-tight text-white">300+</dd>
        </div>
        <div class="flex flex-col-reverse gap-1 intersect:motion-preset-slide-right intersect:motion-delay-[200ms] intersect:motion-ease-spring-bouncier">
          <dt class="text-base/7 text-gray-300">Contribution à la Création d’emplois 
          </dt>
          <dd class="text-4xl font-semibold tracking-tight text-white">500+</dd>
        </div>
        <div class="flex flex-col-reverse gap-1 intersect:motion-preset-slide-right intersect:motion-delay-[200ms] intersect:motion-ease-spring-bouncier">
          <dt class="text-base/7 text-gray-300">de FCFA fournis sur le marché </dt>
          <dd class="text-4xl font-semibold tracking-tight text-white">200M</dd>
        </div>
      </dl>
    </div>)
}