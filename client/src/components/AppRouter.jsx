import React, { useContext } from 'react';
import {Routes, Route, Navigate } from 'react-router-dom';
import { authRoutes, publicRoutes } from '../routes';
import { Context } from '../index';

const AppRouter = () => {
    const {user} = useContext(Context)
    return (
        <Routes>
            {user.isAuth && authRoutes.map(({path, element}) =>
                <Route key={path} path={path} element={element}/>
            )}
            {publicRoutes.map(({path, element}) =>
                <Route key={path} path={path} element={element}/>
            )}


            {user.isAuth && <Route path='*' element={<Navigate to='/map' />}/>}
            {!user.isAuth && <Route path='*' element={<Navigate to='/login' />}/>}
        </Routes>
    );
}

export default AppRouter;
