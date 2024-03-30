import { Link } from "react-router-dom";

// Import components
import Header from "../components/Header";
import Footer from "../components/Footer";

// Import hooks
import Filter_artisan_category_note from "../hooks/Filter_artisan_category_note";

function Craftsman() {
  const { artisans, renderStars, selectedCategory, filterArtisansByCategory } =
    Filter_artisan_category_note(); // Utilisation du hook personnalisé

  return (
    <div>
      <Header />

      <main className="container">
        <div>
          <h1 className="text-center">Liste des artisans</h1>
        </div>

        {/* Liste déroulante des catégories */}
        <div className="mb-3">
          <select
            className="form-select"
            value={selectedCategory}
            onChange={(e) => filterArtisansByCategory(e.target.value)}
          >
            <option value="">Toutes les catégories</option>
            <option value="Bâtiment">Bâtiment</option>
            <option value="Services">Service</option>
            <option value="Fabrication">Fabrication</option>
            <option value="Alimentation">Alimentation</option>
          </select>
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
                        to={`/artisan/${artisan.id}`}
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

export default Craftsman;
