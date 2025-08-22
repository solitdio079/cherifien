import * as React from "react";
import Layout from "../components/Layout";
import { Link } from "gatsby";

//import Seo from "../components/Seo";
import firstImg from "../images/about.png";
import Seo from "../components/Seo";

const Contact = () => {
  return (
    <>
      <Layout>
        <div className="bg-base-200 py-8">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 motion-opacity-in-0 motion-translate-y-in-100 motion-blur-in-md">
            <div className="flex justify-center items-center flex-col gap-5 mx-auto mb-12 w-fit sm:mb-16 lg:mb-24">
              <span className="uppercase text-primary  intersect:motion-preset-slide-right intersect:motion-delay-[200ms] intersect:motion-ease-spring-bouncier">
                {" "}
                Cherifien Agrobusiness
              </span>
              <h2 className="text-primary text-3xl font-bold md:text-4xl lg:text-5xl  intersect:motion-preset-slide-left intersect:motion-delay-[300ms] intersect:motion-ease-spring-bouncier">
                Contactez-nous
              </h2>
              <p className="text-base-content text-md md:text-lg lg:text-xl  intersect:motion-preset-slide-right intersect:motion-delay-[400ms] intersect:motion-ease-spring-bouncier">
                Notre équipe est prête à vous aider — contactez-nous pour en
                savoir plus sur nos services et solutions.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:px-6 lg:px-8 my-12 mx-auto">
              <div className="card card-border shadow-none  intersect:motion-preset-slide-right intersect:motion-delay-[200ms] intersect:motion-ease-spring-bouncier">
                <div className="p-5 gap-5 flex flex-row">
                  <Link
                    to={"#"}
                    className="w-fit p-3 bg-primary rounded-md mb-4"
                  >
                    <span className="icon-[tabler--send] text-primary-content size-8 rtl:rotate-180 "></span>
                  </Link>

                  <div>
                    <h5 className="card-title mb-2.5 text-xl">Email</h5>
                    <p className="mb-4">cherifien@cherifien.com</p>
                  </div>
                </div>
              </div>
              <div className="card card-border shadow-none  intersect:motion-preset-slide-left intersect:motion-delay-[500ms] intersect:motion-ease-spring-bouncier">
                <div className="p-5 gap-5 flex flex-row">
                  <Link
                    to={"#"}
                    className="w-fit p-3 bg-primary rounded-md mb-4"
                  >
                    <span className="icon-[tabler--phone] text-primary-content size-8 rtl:rotate-180 "></span>
                  </Link>

                  <div>
                    <h5 className="card-title mb-2.5 text-xl">Telephone</h5>
                    <p className="mb-4">+223 66 79 89 86</p>
                  </div>
                </div>
              </div>
              <div className="card card-border shadow-none  intersect:motion-preset-slide-right intersect:motion-delay-[600ms] intersect:motion-ease-spring-bouncier">
                <div className="p-5 gap-5 flex flex-row">
                  <Link
                    to={"#"}
                    className="w-fit p-3 bg-primary rounded-md mb-4"
                  >
                    <span className="icon-[tabler--map-pin] text-primary-content size-8 rtl:rotate-180 "></span>
                  </Link>

                  <div>
                    <h5 className="card-title mb-2.5 text-xl">Adresse</h5>
                    <p className="mb-4">Bamamko- Mali</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3">
              <div
                className=" md:block md:col-span-2  intersect:motion-preset-slide-right intersect:motion-delay-[200ms] intersect:motion-ease-spring-bouncier"
                style={{ width: "100%" }}
              >
               
                <iframe
                  width="100%"
                  className="h-80 md:h-[650px] rounded-lg"
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3897.0230390702623!2d-7.8334082248755275!3d12.381388887882432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTLCsDIyJzUzLjAiTiA3wrA0OSc1MS4wIlc!5e0!3m2!1sen!2str!4v1755827589386!5m2!1sen!2str"
                >
                  <a href="https://www.mapsdirections.info/fr/calculer-la-population-sur-une-carte">
                    Carte démographique
                  </a>
                </iframe>
              </div>

              <div className="md:-ml-24 self-center  intersect:motion-preset-slide-right intersect:motion-delay-[300ms] intersect:motion-ease-spring-bouncier">
                <form
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  netlify-honeypot="bot-field"
                  className="p-5 shadow-md grid gap-6 sm:max-w-full grid-cols-1 bg-base-200 rounded-lg"
                  netlify
                >
                  <div className="flex justify-center items-center flex-col gap-5 mx-auto mb-12 w-fit sm:mb-8 lg:mb-12">
                    <h2 className="text-base-content text-lg font-bold md:text-xl lg:text-2xl">
                      Envoyez-nous un message
                    </h2>
                    <p className="text-base-content text-center text-md">
                      Contactez-nous pour toute demande ou assistance. Nous
                      sommes là pour vous aider et veiller à ce que votre
                      expérience soit exceptionnelle.
                    </p>
                  </div>
                  {/* This is a hidden input Netlify needs */}
                  <input type="hidden" name="form-name" value="contact" />
                  <p hidden>
                    <label>
                      Don’t fill this out if you’re human:{" "}
                      <input name="bot-field" />
                    </label>
                  </p>
                  <div className="input">
                    <div className="input-floating grow">
                      <input
                        type="text"
                        className="grow"
                        placeholder="Djoko Keita"
                        id="fullName"
                        name="fullName"
                      />
                      <label
                        className="input-floating-label ms-0"
                        htmlFor="fullName"
                      >
                        Nom Complet
                      </label>
                    </div>
                    <span className="icon-[tabler--user] text-base-content/80 my-auto ms-3 size-5 shrink-0"></span>
                  </div>

                  <div className="input">
                    <div className="input-floating grow">
                      <input
                        type="email"
                        className="grow"
                        placeholder="abc@gmail.com"
                        id="email"
                        name="email"
                      />
                      <label
                        className="input-floating-label ms-0"
                        htmlFor="email"
                      >
                        Email
                      </label>
                    </div>
                    <span className="icon-[tabler--mail] text-base-content/80 my-auto ms-3 size-5 shrink-0"></span>
                  </div>
                  <div className="textarea">
                    <div className="textarea-floating grow">
                      <textarea
                        className="resize-none"
                        placeholder="Hello!!!"
                        id="textareaFloatingMedium"
                        name="message"
                      ></textarea>
                      <label
                        className="textarea-floating-label"
                        htmlFor="textareaFloatingMedium"
                      >
                        Message
                      </label>
                    </div>
                    <span className="icon-[tabler--message] text-base-content/80 mt-2 mx-4 size-5 shrink-0"></span>
                  </div>
                  <input type="hidden" name="form-name" value="contact" />
                  <input type="hidden" name="redirect" value="https://cherifien.com/thank-you" />

                  <button
                    type="submit"
                    className="btn btn-primary btn-next"
                    data-stepper-next-btn=""
                  >
                    <span className="">Envoyer</span>
                  </button>
                  <p className="my-3 text-center">
                    Je comprends que mes données seront conservées en toute
                    sécurité conformément à la politique de confidentialité.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Contact;

export const Head = () => <Seo title={"Contact"} />;
