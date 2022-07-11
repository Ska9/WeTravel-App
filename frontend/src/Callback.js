import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import { withSnackbar } from 'notistack';
import { postProvider } from '../src/api/search';
import auth0Client from './Auth';
import { changeUser } from '../src/_reducers/common';

class Callback extends Component {
  async componentDidMount() {
    const {
      history,
      enqueueSnackbar,
      dispatch,
    } = this.props
    await auth0Client.handleAuthentication();

    const profile = auth0Client.getProfile();
    const m = await postProvider({
      email: profile.nickname,
      password: profile.password
    });
if(m.data[0])
{
     enqueueSnackbar(`Bienvenu ! ${!m.data[0].is_confirmed ? 'merci de compléter les informations manquantes' : ''} `, { variant : 'success' });
     dispatch(changeUser(m.data[0]))
    }
    history.replace('/');


  }

  render() {
    return (
      <p>Loading profile...</p>
    );
  }
}


const connectedMapPage = connect()(Callback);

export default withSnackbar(withRouter(connectedMapPage))