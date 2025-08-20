// src/pages/thank-you.js
import React from "react";
import { Link } from "gatsby";
import Seo from "../components/Seo";
import Layout from "../components/Layout";

export default function ThankYouPage() {
  return (
    <Layout>
      <main className="flex flex-col bg-base-200 items-center justify-center min-h-96 p-6">
        <div className="bg-white shadow-lg rounded-2xl p-8 max-w-md text-center">
          <h1 className="text-3xl font-bold text-green-600 mb-4">🎉 Merci !</h1>
          <p className="text-gray-700 mb-6">
            Votre message a bien été envoyé. Je vous répondrai dans les plus
            brefs délais.
          </p>
          <Link
            to="/"
            className="bg-primary text-white px-4 py-2 rounded-xl hover:bg-blue-700"
          >
            Retour à l’accueil
          </Link>
        </div>
      </main>
    </Layout>
  );
}

export const Head = () => <Seo title={"Merci"} />;
