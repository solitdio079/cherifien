import React from "react";
import ceoImg from "../images/team3.jpeg"
import placeholderImg from "../images/user.png"
const people = [
  {
    name: "Ahmet Cherif Fofana",
    role: "PDG",
    imageUrl:ceoImg,
    id:1
  },
  {
    name: "Michael Foster",
    role: "Responsable de ferme",
    imageUrl:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Dries Vincent",
    role: "Commercial",
    imageUrl:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Lindsay Walton",
    role: "Zoo technicien",
    imageUrl:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Lindsay Walton",
    role: "Agronome",
    imageUrl:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Lindsay Walton",
    role: "Formateurs",
    imageUrl:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Lindsay Walton",
    role: "Employés qualifiés par activité",
    imageUrl:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
 
];

export default function Team() {
  return (
    <div className="bg-base-200 py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-xl">
          <h2 className="text-6xl font-bold tracking-tight text-pretty text-primary sm:text-4xl">
            Notre Equipe
          </h2>
          <p className="mt-6 text-lg/8 text-white">
            Nous sommes un groupe dynamique de personnes passionnées par ce que
            nous faisons et déterminées à offrir les meilleurs résultats à nos
            clients.
          </p>
        </div>
        <ul
          role="list"
          className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
        >
          {people.map((person) => (
            <li key={person.name}>
              {person.id ===1 ?
              <div className="flex items-center gap-x-6">
                <img
                  alt=""
                  src={person.imageUrl}
                  className="size-16 rounded-full outline-1 -outline-offset-1 outline-white/10"
                />
                <div>
                  <h3 className="text-base/7 font-semibold tracking-tight text-white">{person.name}</h3>
                  <p className="text-sm/6 font-semibold text-indigo-400">{person.role}</p>
                </div>
              </div>
               :
               <div className="flex items-center gap-x-6">
                  <img
                  alt=""
                  src={placeholderImg}
                  className="size-16 rounded-full outline-1 -outline-offset-1 outline-white/10"
                />
               <div>
                 
                 <p className="text-sm/6 font-semibold text-indigo-400">{person.role}</p>
               </div>
             </div>
                }
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
