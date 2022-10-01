import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const Auth = () => {
    let token = localStorage.getItem('token')

    return (
        <>
        {token?<Outlet></Outlet> : <Navigate to={'/login'}></Navigate> } 
        
        </>
    );
}

export default Auth;
