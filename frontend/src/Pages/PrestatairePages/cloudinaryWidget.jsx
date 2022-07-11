import React from "react";
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';



class CloudinaryWidget extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
}

showWidget(widget) {
    widget.open();
}

  render(){
const {
  classes, 
  change,
} = this.props;
 let widget = window.cloudinary.createUploadWidget({ 
    cloudName: "douzlmsdi", uploadPreset: "ga8zj9kb" }, (error, result) => { 

        if (result.event === 'success') {
          change('image', result.info.public_id);
          }

     });

  
  return (
    <div>
<Button  variant="contained"  onClick={() => this.showWidget(widget)}>
upload image
    </Button>
    </div>
  );
}
}


const withTranslate = withTranslation()(CloudinaryWidget);
const connectedMapPage = connect(state =>
  ({ user: state.common.user }))(withTranslate);

export default withRouter(((connectedMapPage))); 

