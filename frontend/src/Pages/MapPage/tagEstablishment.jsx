import React , { Fragment } from "react";

//Material UI
import Room from '@material-ui/icons/Room';
   
class TagEstablishment extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      };
    }
  
    render() {
        return (
            <Fragment>
           <Room
       
            fontSize="large"
            color="secondary"
          /> 
          </Fragment>
        );
    }

}

export default TagEstablishment;
