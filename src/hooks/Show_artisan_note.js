import { useState, useEffect } from 'react';

// Import icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function ShowArtisanNote() {
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

  return { artisans, renderStars };
}

export default ShowArtisanNote;