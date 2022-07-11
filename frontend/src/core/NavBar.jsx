import React from 'react';
import { fade } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import { Button } from 'react-bootstrap';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

import socketIOClient from "socket.io-client";

import Search from '../assets/Icons/search-icon.png';
import World from '../assets/Icons/world-icon.png';
import UK from '../assets/Icons/uk-icon.png';
import Tunisia from '../assets/Icons/tunisia-icon.png';
import Spain from '../assets/Icons/spain-icon.png';
import French from '../assets/Icons/french-icon.png';
import Italy from '../assets/Icons/italy-icon.png';
import auth0Client from '../Auth';
import Logo from '../assets/img/WeTravel Logo Final White.png'
import '../assets/CSS/NavBar.css';

import { publicAnnonce } from '../_reducers/common';


const ENDPOINT = "http://127.0.0.1:3000";

const styles = theme => ({
  grow: {
    flexGrow: 1,
  },
  app: {
    backgroundColor: '#260c0e',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
});

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl : null,
      mobileMoreAnchorEl : null,
    };
    this.handleProfileMenuOpen = this.handleProfileMenuOpen.bind(this);
    this.handleMobileMenuClose = this.handleMobileMenuClose.bind(this);
    this.handleMenuClose = this.handleMenuClose.bind(this);
    this.handleMobileMenuOpen = this.handleMobileMenuOpen.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
}

componentDidMount() {
  const socket = socketIOClient(ENDPOINT);
  const {
    user,
    dispatch,
  } = this.props;


  socket.on("public", data => {
dispatch(publicAnnonce());

   

  });
}

changeLanguage (lng) {
  const {
    i18n 
  } = this.props;
  i18n.changeLanguage(lng);
}

signOut () {
  const {
    history 
  } = this.props;
  auth0Client.signOut();
  history.replace('/');
}

   handleProfileMenuOpen (event) {
    this.setState( {anchorEl: event.currentTarget});
  }

   handleMobileMenuClose () {
    this.setState( {mobileMoreAnchorEl: null});
  }

   handleMenuClose () {
    this.setState( {anchorEl: null});
    this.handleMobileMenuClose();
  }

   handleMobileMenuOpen (event) {
    this.setState( {mobileMoreAnchorEl: event.currentTarget});
  }
render(){


  const menuId = 'primary-search-account-menu';
const {
  anchorEl,
} = this.state;

const {  t, user, history , classes, panel, nbreAnnoce} = this.props;
const isMenuOpen = Boolean(anchorEl);
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={this.handleMenuClose}
    >
      <MenuItem onClick={this.handleMenuClose}>
      {auth0Client.isAuthenticated() && auth0Client.getProfile().name} 
      </MenuItem>
      {auth0Client.isAuthenticated() && (<MenuItem onClick={() => history.push('/editUser')}>Edit</MenuItem>)}
      {auth0Client.isAuthenticated() && (<MenuItem onClick={() => this.signOut()}>Sign Out</MenuItem>)}

    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  
  return (
    <div className={classes.grow}>
      <AppBar className={classes.app} position="static">
        <Toolbar>
          <div className="navbar-logo">
          <Link to="http://localhost:8081/Home"><img src={Logo} alt="navbar-logo"></img></Link>
        </div>
          <div >
          <div className="navbar-items">
          <Link to="/Home">Accueil</Link>
          { auth0Client.isAuthenticated() && (<Link to="/Map">Destination</Link>)}
          <div className="dropdown">
              <Link className="dropbtn">Services</Link>
                <div className="dropdown-content">
                  <a href="">Hôtels</a>
                  <a href="">Restaurants</a>
                  <a href="">Agences de voyage</a>
                  <a href="">Monuments</a>
                  <a href="#activities">Activitées</a>
                </div>
          </div>        
          {auth0Client.isAuthenticated() && user.is_provider && (<Link to="/Prestataire">Espace Prestataire</Link>)}
          {auth0Client.isAuthenticated() && user.is_admin && (<Link to="/Users">Espace Admin</Link>)}
          </div>

          </div>
          
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
          {auth0Client.isAuthenticated() && ( 
          <div className="navbar-language">
            <div className="dropdown">
              <a className="dropbtn"><img src={World} alt="world"></img></a>
                <div className="dropdown-content">
                  <Link onClick={() => this.changeLanguage('en')}><img className="uk" src={UK} alt="uk"></img>{t('english')}</Link>
                  <Link><img className="tunisia" src={Tunisia} alt="tunisia"></img>Arabe</Link>
                  <Link><img className="spain" src={Spain} alt="spain"></img>Espagnole</Link>
                  <Link onClick={() => this.changeLanguage('fr')}><img className="french" src={French} alt="srench"></img>{t('french')}</Link>
                  <Link><img className="italy" src={Italy} alt="italy"></img>Italien</Link>
                </div>
            </div>
       
          </div>
               )}
          {auth0Client.isAuthenticated() && ( 
          <div>
          <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={nbreAnnoce} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton size = "small" aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={panel.length} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={this.handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            </div>
          )}
          {!auth0Client.isAuthenticated() && (<Button className="navbar-signup" onClick={auth0Client.signIn} variant="outline-light">S'inscrire</Button>)}
            
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={this.handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMenu}
    </div>
  );
}
}



const withTranslate = withTranslation()(NavBar);
const connectedMapPage = connect(state =>
  ({ user: state.common.user,
  panel: state.common.panel,
  nbreAnnoce: state.common.nbreAnnoce,
  }))(withTranslate);

export default withRouter((withStyles(styles)(connectedMapPage))); 