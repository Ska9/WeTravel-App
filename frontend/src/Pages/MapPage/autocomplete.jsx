/* eslint-disable no-use-before-define */
import React from 'react';

//React Redux
import { connect } from 'react-redux';
import { selectItem , fetchResult} from '../../_reducers/common';

//Material UI
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import RoomIcon from '@material-ui/icons/Room';

import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';




const styles = (theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
    option: {
        fontSize: 15,
        '& > span': {
          marginRight: 10,
          fontSize: 18,
        },
    },
});

class AutocompleteWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          };
    }
  
    render() {
      const {classes ,dispatch, selectedItem, suggestions} = this.props;
     
     console.log('::::::::::', selectedItem)
      return (

          <Paper component="form" className={classes.root}>
          <IconButton className={classes.iconButton} aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Autocomplete
            id="country-select-demo"
            style={{ width: 300 }}
            options={suggestions}
            classes={{
              option: classes.option,
            }}
            autoHighlight
            autoComplete
            autoSelect
          
            onChange={(event, newValue) => {
              dispatch(selectItem(newValue))
            }}
            getOptionLabel={(option) => option.name}
            renderOption={(option) => (
              <React.Fragment>
              <RoomIcon/> {option.name}
              </React.Fragment>
            )}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Choose a destination"
                variant="outlined"
              
                inputProps={{
                  ...params.inputProps,
                  autoComplete: 'new-password', // disable autocomplete and autofill
                }}
              />
            )}
          />
          <IconButton className={classes.iconButton} 
                      onClick={() => {
                        dispatch(fetchResult(selectedItem))
                      }}
          
          aria-label="search">
            <SearchIcon />
          </IconButton>
          <Divider className={classes.divider} orientation="vertical" />
          <IconButton color="primary" className={classes.iconButton} aria-label="directions">
            <DirectionsIcon />
          </IconButton>
        </Paper>
        );
    }

}

const connectedHomePage = connect(state =>
    ({ selectedItem: state.common.selectedItem ,
      suggestions: state.common.suggestions 
    }))(AutocompleteWrapper);
    const withStyle = withStyles(styles)(connectedHomePage);
    export default withStyle;