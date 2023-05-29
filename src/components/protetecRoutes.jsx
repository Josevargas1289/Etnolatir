import { useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import firebaseApp from '../firebase';
import { getAuth, onAuthStateChanged } from "firebase/auth"
const auth = getAuth(firebaseApp);

import Admin from '../pages/admin/Admin';


const ProtectedRoutes = () => {


    const USER = localStorage.getItem("userSession");

    // console.log('prueba', USER);
    if (USER) {
        return <Admin/>
    } else {
        return <Navigate to='/login'/>
    }
}

export default ProtectedRoutes;

