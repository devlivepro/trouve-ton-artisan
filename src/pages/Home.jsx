import React from "react";
import { useState, useEffect } from "react";

import Header from "../components/Header";

function Home() {
  const [artisans, setArtisans] = useState([]);

  useEffect(() => {
    // Chargement des données lorsque le composant est monté
    fetch("../datas.json")
      .then((response) => response.json())
      .then((data) => {
        // Mise à jour de l'état avec les données récupérées
        setArtisans(data);
      })
      .catch((error) =>
        console.error("Erreur lors de la récupération des données :", error)
      );
  }, []); // Le tableau vide en tant que deuxième argument signifie que cet effet ne s'exécute qu'une seule fois après le montage du composant
  return (
    <div>
      <Header />

      <main className="container">
        <div class="find-artisan-section">
          <h2>Comment trouver mon artisan ?</h2>
          <div class="steps">
            <div class="step">
              <p>
                Étape 1 : Sélectionnez la catégorie d'artisanat dans le menu
                déroulant.
              </p>
            </div>
            <div class="step">
              <p>
                Étape 2 : Parcourez la liste des artisans disponibles dans la
                catégorie sélectionnée.
              </p>
              <p>
                Étape 3 : Cliquez sur le profil de l'artisan pour voir ses
                détails.
              </p>
            </div>
            <div class="step">
              <p>
                Étape 4 : Remplissez le formulaire de contact avec vos
                coordonnées et votre message.
              </p>
              <p>Étape 5 : Envoyez le formulaire.</p>
            </div>
            <div class="step">
              <p>
                Étape 6 : Vous recevrez une réponse de l'artisan sous 48 heures.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h1>Accueil</h1>
          <h2>Les artisans du mois</h2>
          <ul>
            {artisans.map((artisan) => (
              <li key={artisan.id}>
                <p>Nom: {artisan.name}</p>
                <p>Spécialité: {artisan.specialty}</p>
                <p>Note: {artisan.note}</p>
                <p>Localisation: {artisan.location}</p>
                <p>À propos: {artisan.about}</p>
                <p>Email: {artisan.email}</p>
                <p>
                  Site Web: <a href={artisan.website}>{artisan.website}</a>
                </p>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}

export default Home;
