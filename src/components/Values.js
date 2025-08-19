import * as React from "react";

const valeurs = [
    {content: <p>Innovation et création de valeur sur nos produits</p>, icon:"icon-[material-symbols--newsstand]",bgColor:"bg-primary"},
    {content: <p>Respect des normes et qualités de production</p>, icon:"icon-[material-symbols--factory]",bgColor:"bg-yellow-500"},
    {content: <p>Responsabilité sociétale et la durabilité environnementale</p>, icon:"icon-[material-symbols--source-environment]",bgColor:"bg-red-500"},
    {content: <p>Prise en compte des exigences de la clientèle</p>, icon:"icon-[material-symbols--groups]", bgColor:"bg-blue-500"},
    {content: <p>Meilleure organisation et gestion d’entreprise</p>, icon:"icon-[material-symbols--enterprise]", bgColor:"bg-success"},
  
];

export default function Values() {
  return (
    <>
      <div className="grid gap-6 md:grid-cols-3 border-primary section">
        {valeurs.map((item) => (<div className="flex flex-col">
        <div className={`${item.bgColor} rounded-full intersect:motion-preset-slide-right intersect:motion-delay-[100ms] intersect:motion-ease-spring-bouncier z-2 w-fit icon-container p-10 -mb-5 mx-auto`}>
        <span className={`${item.icon} size-16 rtl:rotate-180`} ></span>
        </div>
            
          <div className={`flex ${item.bgColor} intersect:motion-preset-slide-left intersect:motion-delay-[300ms] intersect:motion-ease-spring-bouncier text-2xl font-bold flex-col card items-center p-10 text-center justify-between card-border`}>
            
            {item.content}
          </div>
          </div>
        ))}
      </div>
    </>
  );
}
