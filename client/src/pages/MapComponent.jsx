import React from 'react';
import MapBaseComponent from '../components/Map/MapBaseComponent';
import NavBarComponent from '../components/NavBar/NavBarComponent';

const MapComponent = () => {
    return (
        <div>
            <NavBarComponent />
            <MapBaseComponent /> 
        </div>
    );
}

export default MapComponent;
