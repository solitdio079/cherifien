import * as React from "react";
//import {Link} from "gatsby"
//import logo from "./logo.png"
import Navbar from "./Navbar";
import Footer from "./Footer";
import ObserverProvider from "./ObserverProvider.js";
const Layout = ({ children }) => {
  return (
    <div data-theme="vscode">
      <ObserverProvider>
        <div className="text-primary hidden lg:block bg-white px-6 py-4">
        <div className="flex w-full items-center justify-between">
          <aside className="grid-flow-col items-center text-primary">
            <p>
             
              <a className="link link-hover font-medium text-primary" href="#">
              Nous pratiquons de l'Agriculture Durable & Eco-responsable
              </a>
            </p>
          </aside>
          <div className="flex gap-4 h-5 items-center text-primary">
            <p className="font-bold">Suivez-Nous</p>
            <a href="#" className="link text-primary" aria-label="Github Link">
              <span className="icon-[tabler--brand-github] size-5"></span>
            </a>
            <a href="#" className="link text-primary" aria-label="Facebook Link">
              <span className="icon-[tabler--brand-facebook] size-5"></span>
            </a>
            <a href="#" className="link text-primary" aria-label="X Link">
              <span className="icon-[tabler--brand-x] size-5"></span>
            </a>
            <a href="#" className="link text-primary" aria-label="Google Link">
              <span className="icon-[tabler--brand-google] size-5"></span>
            </a>
          </div>
          <div className="flex gap-4 h-5 items-center text-primary">
          <span className="icon-[tabler--phone] size-4"></span>
          +223 66 79 89 86


          </div>
        </div>
        </div>
       
        <Navbar />
        {children}
        <Footer />
        <a
          href="https://wa.me/22366798986"
          target="_blank"
          className="btn z-10 fixed btn-xl bottom-6 right-6 btn-circle btn-gradient btn-success"
          aria-label="Circle Gradient Icon Button"
        >
          {" "}
          <span className="icon-[tabler--brand-whatsapp] size-10 shrink-0"></span>
        </a>
      </ObserverProvider>
    </div>
  );
};

export default Layout;
