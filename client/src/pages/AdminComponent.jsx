import React, { useContext } from 'react';
import NavBarComponent from '../components/NavBar/NavBarComponent';
import { Context } from '../index';
import Admin from '../components/Admin/Admin';

const AdminComponent = () => {
    return (
        <div>
            <NavBarComponent />
            <Admin />
        </div>
    );
}

export default AdminComponent;
