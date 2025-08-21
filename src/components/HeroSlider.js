import * as React from "react"
import { Link } from "gatsby"

export default function HeroSlider({heroBg, children}){
    return(<>
     <div className="bg-base-100">
      <main className={`w-screen lg:h-[80vh] pb-10 lg:pb-0 relative `}>
        <img src={heroBg} className="absolute z-0 w-full h-full grayscale-25" alt="" />
        <div className="flex h-full flex-col  justify-between gap-18 overflow-x-hidden pt-20 md:gap-24 md:pt-25 lg:gap-15 lg:pt-27.5">
          <div className="mx-auto flex max-w-7xl flex-col justify-center items-center gap-8 justify-self-center px-4 text-center sm:px-6 lg:px-8">
            {children}
          </div>
        
        </div>
      </main>
    </div>
    </>)
}