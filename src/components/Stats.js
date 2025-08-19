import * as React from "react"

export default function Stats(){
    return(<div className="section bg-base-200">
     <dl class=" grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div class="flex flex-col-reverse gap-1">
          <dt class="text-base/7 text-gray-300">Visites</dt>
          <dd class="text-4xl font-semibold tracking-tight text-white">12</dd>
        </div>
        <div class="flex flex-col-reverse gap-1">
          <dt class="text-base/7 text-gray-300">Jeunes formés 
          </dt>
          <dd class="text-4xl font-semibold tracking-tight text-white">300+</dd>
        </div>
        <div class="flex flex-col-reverse gap-1">
          <dt class="text-base/7 text-gray-300">Contribution à la Création d’emplois 
          </dt>
          <dd class="text-4xl font-semibold tracking-tight text-white">40</dd>
        </div>
        <div class="flex flex-col-reverse gap-1">
          <dt class="text-base/7 text-gray-300">Produits fournis sur le marché </dt>
          <dd class="text-4xl font-semibold tracking-tight text-white">200</dd>
        </div>
      </dl>
    </div>)
}