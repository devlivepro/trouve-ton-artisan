import { Link } from "react-router-dom";

// Import components
import Header from "../components/Header";
import Footer from "../components/Footer";

// Import hooks
import Filter_artisan_category_note_service from "../hooks/Filter_artisan_category_note_food";
import Stars_icon from "../hooks/Stars_icon";

function Cardfood() {
  const { artisans, selectedCategory } = Filter_artisan_category_note_service(); // Utilisation du hook filter
  const { renderStars } = Stars_icon(); // Utilisez le hook stars_icon

  return (
    <div>
      <Header />

      <main className="container">
        <div>
          <h1 className="text-center border-text">
            Liste des artisans dans Service
          </h1>
        </div>

        <div className="row">
          {/* Affichage des artisans filtrés */}
          {artisans
            .filter(
              (artisan) =>
                !selectedCategory || artisan.category === selectedCategory
            )
            .map((artisan, index) => (
              <div key={index} className="col-lg-4 mb-4">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">{artisan.name}</h5>
                    <p className="card-text">
                      Note : {renderStars(artisan.note)}
                    </p>
                    <p className="card-text">
                      Spécialité : {artisan.specialty}
                    </p>
                    <p className="card-text">
                      Localisation : {artisan.location}
                    </p>
                    <div>
                      <Link
                        to={`/cardcraftsman/${artisan.id}`}
                        className="btn btn-primary"
                      >
                        Voir détails
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Cardfood;