import React from 'react';
import { GoogleMap, Marker } from '@react-google-maps/api';

const Mapa: React.FC = () => {
  return (
    <GoogleMap
      center={{ lat: -20.254579, lng: -43.803338 }}
      zoom={17}
      mapContainerStyle={{ width: '100%', height: '300px'}}
    >
      <Marker position={{ lat: -20.254579424016054, lng: -43.80333880880678 }} />
    </GoogleMap>
  );
};

export default Mapa;

// -20.254579424016054, -43.80333880880678

// AIzaSyAJiCgHG-52hFuLUGACZWAsvXKEnDe5Hfw