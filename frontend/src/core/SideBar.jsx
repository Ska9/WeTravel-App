import React from 'react';
import { Link } from 'react-router-dom';

//Icons
import Profile from '../assets/Icons/Profile.png';
import Annonces from '../assets/Icons/Annonces.png';
import Add from '../assets/Icons/Add.png';
import Message from '../assets/Icons/message.png';
import Notifications from '../assets/Icons/Notifications.png';

//CSS Files
import '../assets/CSS/SideBar.css';

class SideBar extends React.Component {

    render () {
        return (
            <div>
                <input type="checkbox" id="check"/>
                    <label htmlFor="check">
                        <i className="fas fa-bars" id="burger"></i>
                        <i className="fas fa-times" id="cancel"></i>
                    </label>
                <div className="sidebar">
                    <header>Menu</header>
                    <ul>
                        <li><Link to="http://localhost:8081/ProfileSettings"><img src={Profile} alt="profile"></img>Profile</Link></li>
                        <li><Link to="http://localhost:8081/MyAds"><img src={Annonces} alt="annonce"></img>Mes Annonces</Link></li>
                        <li><Link to="http://localhost:8081/NewAd"><img src={Add} alt="ajouter"></img>Ajouter service</Link></li>
                        <li><Link to="http://localhost:8081/Welcome"><img src={Message} alt="message"></img>Messagerie</Link></li>
                        <li><Link to="http://localhost:8081/Welcome"><img src={Notifications} alt="notification"></img>Notifications</Link></li>
                    </ul>
                </div>    
            </div>
        );
    }

}

export default SideBar; 