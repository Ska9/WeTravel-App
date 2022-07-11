import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';

//React Redux
import { connect } from 'react-redux';
import { history } from '../_helpers';


//Pages
import { HomePage } from '../Pages/HomePage';
import { MapPage } from '../Pages/MapPage';
import { AdminLoginPage } from '../Pages/AdminPages/AdminLoginPage';
import  AdminHome  from '../Pages/AdminPages/AdminHome';
import { LoginPage } from '../Pages/LoginPage';
import { SignUpPage } from '../Pages/SignUpPage';
import  MyAds  from '../Pages/PrestatairePages/MyAds';
import NewAd from '../Pages/PrestatairePages/NewAd';
import Product from '../Pages/PrestatairePages/product';
import Establishment from '../Pages/PrestatairePages/establishment';

import ProfileSettings from '../Pages/PrestatairePages/PofileSettings';

import Callback from '../Callback';
import NavBar from '../core/NavBar';

class App extends React.Component {

    constructor(props) {
        super(props);
    }
    render() {
        return (
             
                        <Router history={history}>
                        <NavBar/>
                            <Switch>
                                <Route exact path="/Home" component={HomePage} />
                               <Route exact path="/Admin" component={AdminLoginPage} />
                                <Route exact path="/Prestataire" component={MyAds} />
                                <Route path="/NewAd" component={NewAd} />
                                <Route path="/Product" component={Product} />
                                <Route path="/Establishment" component={Establishment} />
                                
                                 <Route path="/ProfileSettings" component={ProfileSettings} />
                                <Route exact path='/callback' component={Callback}/>
                                <Route path="/Users" component={AdminHome} />
                                <Route path="/Map" component={MapPage} />
                                <Route path="/SignIn" component={LoginPage} />
                                <Route path="/editUser" component={SignUpPage} />
                                <Redirect from="*" to="/Home" />
                            </Switch>
                        </Router>
        );
    }

}

const connectedApp = connect()(App);
export { connectedApp as App };