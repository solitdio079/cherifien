import * as React from "react"
import partner1 from "../images/formation.jpeg"
import partner2 from "../images/heroBg1.jpeg"
import partner3 from "../images/heroBg2.jpeg"
import partner4 from "../images/heroBg3.jpeg"
import partner5 from "../images/heroBg4.jpg"
import partner6 from "../images/oeuf1.jpeg"
import partner7 from "../images/poussin1.jpeg"
import partner8 from "../images/welcome.png"

const services = [
  partner1,partner2, partner3, partner4,partner5,partner6,partner7,partner8
]


export default function ScrollGallery() {
    return (<>
     <div className="flex gap-6 overflow-hidden duration-300 [mask-image:_linear-gradient(to_right,transparent_0,_black_50px,_black_calc(100%-50px),transparent_100%)]">
        <div className="flex flex-nowrap gap-6 animate-logo mx-3">
             
            {services.map(service => 
                  <img className="h-48 lg:h-70" src={service} alt="partner logo"/>
            )}
           
           
          
         
        </div>
        
       
       
     
     
       
      </div>
     
    </>
     
    );
  }
  