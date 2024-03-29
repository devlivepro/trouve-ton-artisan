import React from "react";
import { useState, useEffect } from "react";

import Header from "../components/Header";

function Home() {
  const [artisans, setArtisans] = useState([]);

  useEffect(() => {
    fetch("/datas.json")
      .then((response) => response.json())
      .then((data) => {
        // Inclure tous les artisans
        const allArtisans = data;
        // Limiter aux trois premiers artisans
        const topThreeArtisans = allArtisans.slice(0, 3);
        // Mettre à jour l'état avec les artisans
        setArtisans(topThreeArtisans);
      })
      .catch((error) =>
        console.error("Erreur lors de la récupération des données :", error)
      );
  }, []);

  return (
    <div>
      <Header />

      <main className="container">
        <section className="find-artisan-section">
          <div className="content">
            <div className="steps">
              <div className="step">
                <div className="step-icon">1</div>
                <p>
                  Sélectionnez la catégorie d'artisanat dans le menu déroulant.
                </p>
              </div>
              <div className="step">
                <div className="step-icon">2</div>
                <p>
                  Parcourez la liste des artisans disponibles dans la catégorie
                  sélectionnée.
                </p>
                <p>Cliquez sur le profil de l'artisan pour voir ses détails.</p>
              </div>
              <div className="step">
                <div className="step-icon">3</div>
                <p>
                  Remplissez le formulaire de contact avec vos coordonnées et
                  votre message.
                </p>
                <p>Envoyez le formulaire.</p>
              </div>
              <div className="step">
                <div className="step-icon">4</div>
                <p>Vous recevrez une réponse de l'artisan sous 48 heures.</p>
              </div>
            </div>
          </div>
        </section>

        
        {/* Le top 3 des artisans */}
          <section>
            <h2>Les artisans du mois</h2>
            <div className="card-container">
              {artisans.slice(0, 3).map((artisan) => (
                <div key={artisan.id} className="card">
                  <h3>{artisan.name}</h3>
                  <p>Spécialité: {artisan.specialty}</p>
                  <p>Note: {artisan.note}</p>
                  <p>Localisation: {artisan.location}</p>
                  <p>À propos: {artisan.about}</p>
                  <p>Email: {artisan.email}</p>
                  <p>
                    Site Web: <a href={artisan.website}>{artisan.website}</a>
                  </p>
                </div>
              ))}
            </div>
          </section>

      </main>
    </div>
  );
}

export default Home;
