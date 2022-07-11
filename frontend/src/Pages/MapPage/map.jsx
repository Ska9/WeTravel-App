import React from "react";
import { connect } from 'react-redux';
import GoogleMapReact from 'google-map-react';


import TagEstablishment from "./tagEstablishment";

const getMapOptions = () => ({
    disableDefaultUI: false,
    mapTypeControl: true,
    streetViewControl: true,
    scaleControl: true,
    zoomControl: true,
  });     
    
class Map extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
          };
    }
    handleApiLoaded  ()  {
      }

    render() {
        const {
            result
        } = this.props;
        return (
            <div style={{ height: '100vh', width: '100%' }}>
            <GoogleMapReact
           bootstrapURLKeys={{ key: 'AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc' }}
              defaultCenter={{
                lat: 35.5,
                lng: 10.09
              }}
           options={getMapOptions}
              onGoogleApiLoaded={({ map, maps }) => this.handleApiLoaded(map, maps)}
              defaultZoom={9}
            >
             {result.map(item => (

            <TagEstablishment
            key={item.id}
           lat={item.latitude}
           lng={item.longitude}
          />   ))}
            </GoogleMapReact> 
          </div>
        );
    }

}

const connectedHomePage = connect(state =>
    ({ result: state.common.result }))(Map);
    export default connectedHomePage;
