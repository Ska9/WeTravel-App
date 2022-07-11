import React from "react";
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import EstablishmentItem from './establishmentItem';

const styles = theme => ({
    root: {
        flexGrow: 1,
      },
      paper: {
        height: 140,
        width: 100,
      },
      control: {
        padding: theme.spacing(2),
      },
    });
    

class EstablishmentList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
}

  render(){
const {
  classes, 
  change,
  establishment
} = this.props;

  return (
    <div>
   <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={2}>
          {establishment.map((value) => (
            <Grid key={value.id} item>
              {/* <Paper className={classes.paper} /> */}
              <EstablishmentItem value={value}/>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
    </div>
  );
}
}


const withTranslate = withTranslation()(EstablishmentList);
const connectedMapPage = connect(state =>
  ({ establishment: state.common.establishment }))(withTranslate);

export default withRouter((withStyles(styles)(connectedMapPage))); 

