import React from 'react';

//Images
import Logo_Footer from '../assets/img/Logo white.png';

//CSS Files
import '../assets/CSS/Footer.css'; 

class Footer extends React.Component {

  render () {
    return (
      <div className="footer">

        <div className="left-footer">
          <img src={Logo_Footer} alt="logo"></img>
          <p>Portail web pour le sectuer touristique en Tunisie</p>
        </div>
        
        <ul className="right-footer">
          <li>
          <h2 className="footer-title">Explorer</h2>
            <ul className="list">
              <li><a href="">Accueil</a></li>
              <li><a href="">Destination</a></li>
              <li><a href="">Tableau de bord</a></li>
            </ul>
          </li>

          <li>
          <h2 className="footer-title">Demarrer</h2>
            <ul className="list">
            <li><a href="">S inscrire</a></li>
            <li><a href="">Login</a></li>
            </ul>
          </li>

          <li>
          <h2 className="footer-title">Contacts</h2>
            <ul className="list">
            <li><a href="">email@email.com</a></li>
            <li><a href="">+216 99 88 77 66</a></li>
            </ul>
          </li>
        </ul>

        <div className="b-footer">
          <p>Tous droits réservés © 2020 WeTravel</p>
        </div>

      </div>   
    );
  }

}

export default Footer;