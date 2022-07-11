import React from "react";
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';




import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

//Components

import 'react-chat-widget/lib/styles.css';



//CSS Files
import "../../assets/CSS/MyAds.css";

import { fetchEstablishment , fetchProduct ,fetchAnnonce } from '../../_reducers/common';

// import EstablishmentList from './establishmentList';
import ProviderList from './provider';
import AnnonceList from './annonceList';

const styles = theme => ({
  root: {
    height: 380,
    transform: 'translateZ(0px)',
    flexGrow: 1,
  },
  tabs: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  speedDial: {
    position: 'absolute',
    bottom: '85px',
    right: '22px',
    color: '#260c0e',
  },
});

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}



class AdminPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open : false,
      value:0,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
}

componentDidMount() {
  const {
    user,
    dispatch,
  } = this.props;

//   dispatch(fetchEstablishment(Number(user.id)));
//   dispatch(fetchProduct(Number(user.id)));
  dispatch(fetchAnnonce());
//   socket.on("eventTrigger", data => {

// if(Number(user.id) !== Number(data.provider_id)) {
//   addResponseMessage(data.message);
// }
   

//   });
}
handleClose () {
    this.setState( {open: false});
  }


   handleChange (event, newValue) {
    this.setState( {value: newValue});
  }

  handleOpen () {
    this.setState( {open: true});
  }

  render(){
const {
  classes, 
  history,
} = this.props;
  const {
    open,
    value,
  } = this.state;
  return (
    <div>
      <AppBar position="static" color="default" >
        <Tabs
          value={value}
          onChange={this.handleChange}
          variant="fullWidth"
          scrollButtons="on"
          indicatorColor="primary"
          textColor="primary"
          aria-label="scrollable force tabs example"
        >
          <Tab label="Gestion des fournisseurs"  {...a11yProps(0)} />
          <Tab label="Gestion des abonnées"  {...a11yProps(1)} />
          <Tab label="Gestion des annonces" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
     {/* <ProviderList/> */}
      </TabPanel>
      <TabPanel value={value} index={1}>
      {/* <ProductList/> */}
      </TabPanel>
      <TabPanel value={value} index={2}>
     <AnnonceList/>
      </TabPanel>  
    </div>
  );
}
}


const withTranslate = withTranslation()(AdminPage);
const connectedMapPage = connect(state =>
  ({ user: state.common.user }))(withTranslate);

export default withRouter((withStyles(styles)(connectedMapPage))); 

