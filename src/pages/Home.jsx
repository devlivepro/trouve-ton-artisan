import React from "react";
import ShowArtisanNote from "../hooks/Show_artisan_note"; // Importation votre hook personnalisé

// Import pages
import Header from "../components/Header";
import Footer from "../components/Footer";

// Import hook
import Stars_icon from "../hooks/Stars_icon";

function Home() {
  const { artisans } = ShowArtisanNote(); // Utilisation du hook Show
  const { renderStars } = Stars_icon(); // Utilisez le hook stars_icon

  return (
    <div>
      <Header />

      <main className="container">
        <section className="find-artisan-section">
          <h1>
            Trouve ton artisan
          </h1>
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
          <h2 className="mb-4">Les artisans du mois</h2>
          <div className="row">
            {artisans.slice(0, 3).map((artisan) => (
              <div key={artisan.id} className="col-md-4 mb-4">
                <div className="card">
                  <div className="card-body">
                    <h3 className="card-title">{artisan.name}</h3>
                    <p className="card-text">
                      Note : {renderStars(artisan.note)}
                    </p>
                    <p className="card-text">Spécialité: {artisan.specialty}</p>
                    <p className="card-text">
                      Localisation: {artisan.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
