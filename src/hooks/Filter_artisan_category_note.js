import { useState, useEffect } from "react";

// Import icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function Filterartisancategorynote() {
  const [artisans, setArtisans] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    fetch("/datas.json")
      .then((response) => response.json())
      .then((data) => {
        setArtisans(data);
      })
      .catch((error) =>
        console.error("Erreur lors de la récupération des données :", error)
      );
  }, []);

  // Fonction pour filtrer les artisans par catégorie
  const filterArtisansByCategory = (category) => {
    setSelectedCategory(category);
  };

  // Fonction pour afficher les étoiles en fonction de la note
  const renderStars = (note) => {
    const starCount = Math.round(note); // Arrondir la note à l'entier le plus proche
    const stars = [];
    for (let i = 0; i < starCount; i++) {
      stars.push(
        <FontAwesomeIcon icon={faStar} key={i} className="star-icon" />
      );
    }
    return stars;
  };

  // Retourner les valeurs nécessaires
  return { artisans, renderStars, selectedCategory, filterArtisansByCategory };
}

export default Filterartisancategorynote;
