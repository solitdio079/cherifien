import * as React from "react" 
import logo from "../images/logo.png"
import NavLink from "./Navlink"
export default function Navbar(){
    return (<>
    <nav className="navbar lg:sticky lg:top-0 z-50 rounded-box shadow-base-300/20 shadow-sm">
  <div className="w-full md:flex md:items-center md:gap-2">
    <div className="flex items-center justify-between">
      <div className="navbar-start items-center justify-between max-md:w-full">
        <a className="link text-base-content link-neutral text-xl font-bold no-underline" href="#">
          <img  src={logo} className="w-32 lg:w-80" alt="logo" />
        </a>
        <div className="md:hidden">
          <button type="button" className="collapse-toggle btn btn-outline btn-secondary btn-sm btn-square" data-collapse="#navbar-collapse" aria-controls="navbar-collapse" aria-label="Toggle navigation" >
            <span className="icon-[tabler--menu-2] collapse-open:hidden size-4"></span>
            <span className="icon-[tabler--x] collapse-open:block hidden size-4"></span>
          </button>
        </div>
      </div>
    </div>
    <div id="navbar-collapse" className="md:navbar-end collapse hidden grow basis-full overflow-hidden transition-[height] duration-300 max-md:w-full" >
      <ul className="menu md:menu-horizontal gap-2 p-0 text-base max-md:mt-2">
        <li><NavLink to={"/"}>Accueil</NavLink></li>
        <li><NavLink to={"/about"}>Qui sommes nous?</NavLink></li>
        <li><NavLink to={"/services"}>Nos Produits & Services</NavLink></li>
        <li><NavLink to={"#"}>Infos & liens utiles</NavLink></li>
        <li><NavLink to={"/contact"}>Contact</NavLink></li>
        
      </ul>
    </div>
  </div>
</nav>
    </>)
}