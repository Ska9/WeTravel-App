import React from 'react';
import { Link } from 'react-router-dom';

//Icons
import Papers from '../assets/Icons/Papers.png';
import Data from '../assets/Icons/Data.png';
import Ad from '../assets/Icons/Ad.png';
import Message from '../assets/Icons/message.png';

//CSS Files
import '../assets/CSS/AdminSideBar.css';

class AdminSideBar extends React.Component {

  render() {
      return (
        <div className="admin-sidebar">
          <header>Menu</header>
            <ul>
              <li><Link to=""><img src={Papers} alt="papers"></img>Réclamations</Link></li>
              <li><Link to=""><img src={Data} alt="users"></img>Abonnés</Link></li>
              <li><Link to=""><img src={Ad} alt="ad"></img>Annonces</Link></li>
              <li><Link to=""><img src={Message} alt="chat"></img>Messagerie</Link></li>
            </ul>
        </div>    
      );
  } 
  
}

export default AdminSideBar; 