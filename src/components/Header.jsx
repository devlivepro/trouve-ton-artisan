import React, { useState, useEffect } from "react";
import { Container, Navbar, Nav, Form, FormControl } from "react-bootstrap";
import logo from "../assets/img/Logo.png";
import "../assets/css/styles.css";

function Header() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    // Charger les données JSON lorsque le composant est monté
    fetch("/datas.json")
      .then((response) => response.json())
      .then((data) => {
        setAllData(data); // Stocker toutes les données dans l'état local
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []); // Utiliser un tableau vide pour exécuter cet effet une seule fois lors du montage

  const handleSearch = (event) => {
    const inputSearchTerm = event.target.value;
    setSearchTerm(inputSearchTerm); // Mettre à jour la valeur de recherche

    // Filtrer les données en fonction de la valeur de recherche
    const filteredData = allData.filter(
      (data) =>
        // Vérifier si le nom, la spécialité ou la ville correspondent à la recherche
        data.name.toLowerCase().includes(inputSearchTerm.toLowerCase()) ||
        data.specialty.toLowerCase().includes(inputSearchTerm.toLowerCase()) ||
        data.location.toLowerCase().includes(inputSearchTerm.toLowerCase())
    );

    setSearchResults(filteredData); // Mettre à jour les résultats de la recherche
  };

  return (
    <header>
      <Navbar expand="lg" className="color-template1">
        <Container className="justify-content-between">
          <Navbar.Brand href="/">
            <img
              src={logo}
              className="logo-img"
              alt="Logo trouve ton artisan"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
              <Nav.Link href="/craftsman">Bâtiment</Nav.Link>
              <Nav.Link href="/cardservice">Services</Nav.Link>
              <Nav.Link href="/cardmanufacturing">Fabrication</Nav.Link>
              <Nav.Link href="/cardfood">Alimentation</Nav.Link>
            </Nav>
            <div className="search-container" style={{ position: "relative" }}>
              <Form>
                <FormControl
                  type="text"
                  value={searchTerm}
                  onChange={handleSearch}
                  placeholder="Rechercher..."
                />
              </Form>
              {/* Afficher les suggestions d'autocomplete */}
              {searchTerm && (
                <div className="autocomplete">
                  <ul>
                    {searchResults.map((result, index) => (
                      <li key={index}>
                        <a href={`/cardcraftsman/${result.id}`}>
                          <p><strong>Nom:</strong> {result.name} -{" "}</p>
                          <p><strong>Spécialité:</strong> {result.specialty} -{" "}</p>
                          <p><strong>Localisation:</strong> {result.location}</p>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
