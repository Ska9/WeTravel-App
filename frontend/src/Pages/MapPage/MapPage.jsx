import React from 'react';
import SplitterLayout from 'react-splitter-layout';
import { withRouter } from 'react-router-dom';
import { withTranslation } from 'react-i18next';

//React Redux
import { connect } from 'react-redux';
import { fetchSuggestions } from '../../_reducers/common';

//Components & Pages
import Map from './map';
import Autocomplete from './autocomplete';
import Establishment from '../../core/establishment';

//Material UI
import { withStyles } from '@material-ui/core/styles';
import { Paper , Grid , IconButton } from '@material-ui/core';  
import { green , red } from '@material-ui/core/colors';
import HotelIcon from '@material-ui/icons/Hotel';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';

//CSS Files
import '../../assets/CSS/Map.css';
import '../../assets/CSS/Home.css';
import 'react-splitter-layout/lib/index.css';

const styles = (theme) => ({
    blockContainer: {
        textAlign:'center',
      },
      root: {
        flexGrow: 1,
      },
      auto: {
        margin: '20px',  
        width: '95%',  
      },
      root1 : {
        width: '100%',
      },
      paper: {
        padding: theme.spacing(2),
        width: '100%',
        color: theme.palette.text.secondary,
      },
      tags: {
        '& > *': {
          margin: theme.spacing(1),
      }
    }
  });
  
class MapPage extends React.Component {

    constructor(props) {
    super(props);
    this.state = {
      };
    }

  componentDidMount(){
    const {
      dispatch
    } = this.props;
    dispatch(fetchSuggestions());
  }

    render() {
        const {  t, dispatch,history, classes, data, result} = this.props;
        return (
          <div>
          <SplitterLayout secondaryInitialSize={60} percentage>
           <div className="header">
  
            <Paper className={classes.paper}>
             <Autocomplete/>
          <div className={classes.tags}>
      <IconButton aria-label="hotel" >
        <HotelIcon style={{ color: red[500] }}/>
      </IconButton>
      <IconButton aria-label="restaurant" color="primary">
        <RestaurantIcon />
      </IconButton>
      <IconButton aria-label="LocationCity" style={{ color: green[500] }} >
        <LocationCityIcon />
      </IconButton>
      <IconButton aria-label="LocationCity" style={{ color: green[1] }} >
        <AccountBalanceIcon />
      </IconButton>
    </div>
          </Paper>
          <Grid  
          className="content" 
      container
  direction="column"
  justify="center"
  alignItems="center" spacing={2}>
        {  
               result.map(est => (
                <Grid key = {est.id} item>
                <Establishment
                title={est.name}
                description={est.description}
                image={est.image}
                products={est.product_list}
                dispatch={dispatch}
                />   
                </Grid>
               )
               )
             }
      </Grid>
    </div>
            
            <Map />
      </SplitterLayout>
            </div>     
        );
    }

}

const connectedMapPage = connect(state =>
  ({ data: state.common.data , result: state.common.result }))(MapPage);
const withTranslate = withTranslation()(connectedMapPage);
const withrouter = withRouter(withTranslate)
const withStyle = withStyles(styles)(withrouter);
export { withStyle as MapPage };