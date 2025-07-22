import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/firebase.config';
import { AuthContext } from './AuthContext';


const AuthProvider = ({children}) => {

    const [ user, setUser ] = useState(null);
    const [ loading, setLoading ] = useState(true);

    useEffect(()=> {
        const unSubscribe = onAuthStateChanged(auth, currentUser=> {
            setUser(currentUser);
            setLoading(false);
        })

        return ()=> unSubscribe();
    },[])

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const authInfo = {
        user,
        loading,
        createUser
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;