import { useParams } from "react-router-dom";

// Import components
import Header from "../components/Header";
import Footer from "../components/Footer";

// Import hooks
import Filter_artisan_card from "../hooks/Filter_artisan_card";
import Stars_icon from "../hooks/Stars_icon";

function Card_crafts_man() {
  const { id } = useParams();
  const { renderStars } = Stars_icon(); // Utilisez le hook Stars_icon

  // Utilisation du hook personnalisé
  const artisan = Filter_artisan_card(id);

  if (!artisan) {
    return <div>Loading...</div>; // Affiche un message de chargement si l'artisan n'est pas encore chargé
  }

  // Affiche les détails de l'artisan
  return (
    <div>
      <Header />

      <main className="container">
        <div>
          <h1 className="text-center border-text">
            Liste des artisans dans le bâtiments
          </h1>
        </div>

        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{artisan.name}</h5>
              </div>
              <div className="card-body">
                <p className="card-text">Note : {renderStars(artisan.note)}</p>
                <p className="card-text">Spécialité : {artisan.specialty}</p>
                <p className="card-text">Localisation : {artisan.location}</p>
                {/* Autres détails de l'artisan */}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Card_crafts_man;
