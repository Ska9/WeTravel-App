import React, { Fragment } from 'react';

//GIF
import Animation from './../assets/Gif/CompassLoader.gif';

class Loader extends React.Component {

    render() {
        return (
            <Fragment>
                <img src={Animation} style={{ display: 'block', position: 'absolute', height: '100%', width:'100%'}} alt='loading'/>
            </Fragment>
        );
    }
    
}

export default Loader;