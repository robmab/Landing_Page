import React from "react";

import NavBar from "./nav-bar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Card from "./card.jsx";
import Footer from "./footer.jsx";

let card1 =
  "Donec finibus nulla lectus, quis aliquet turpis luctus id. Nulla quis ultrices dolor. Sed cursus risus sit amet ante iaculis, at vulputate elit tincidunt. Nunc a est a nunc convallis blandit sed id velit.";
let card2 =
  "Nunc rhoncus nulla id odio gravida vestibulum. In malesuada scelerisque ipsum, sed porttitor risus.";
let card3 =
  "Curabitur nec faucibus turpis, quis consectetur tortor. Mauris id vehicula dui. Cras sit amet pharetra dui. Nulla a iaculis nisl, ac imperdiet urna. Curabitur condimentum sapien neque, vitae lacinia risus maximus eget.";
let card4 =
  "Nunc volutpat dictum consequat. Vivamus vitae eros fermentum, molestie lacus nec, fermentum quam.";

const Home = () => {
  return (
    <div className="container-fluid p-0">
      <NavBar />
      <Jumbotron />
      <div className="cards row">
        <Card cardText={card1} />
        <Card cardText={card2} />
        <Card cardText={card3} />
        <Card cardText={card4} />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
