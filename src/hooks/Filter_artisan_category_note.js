import { useState, useEffect } from "react";

function Filter_artisan_category_note() {
  const [artisans, setArtisans] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    fetch("/datas.json")
      .then((response) => response.json())
      .then((data) => {
        // Filtrer les artisans par catégorie "Bâtiment"
        const filteredArtisans = data.filter(
          (artisan) => artisan.category === "Bâtiment"
        );
        // Mettre à jour l'état avec les artisans filtrés
        setArtisans(filteredArtisans);
      })
      .catch((error) =>
        console.error("Erreur lors de la récupération des données :", error)
      );
  }, []);

  // Retourner les valeurs nécessaires
  return { artisans, selectedCategory, setSelectedCategory };
}

export default Filter_artisan_category_note;
