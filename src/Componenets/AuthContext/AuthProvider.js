import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../firebase/firebase-init';

const auth = getAuth(app)
export const AuthContext = createContext()


const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [allPosts, setAllPosts] = useState(0)
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
 
    // User login
    const login = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    // Password Reset
    const handleResetPass = (email) => {

        return sendPasswordResetEmail(auth,email)
    }
    // Update user info
    
    // User Logout
    const logOut = () => {
        setLoading(true)
        return signOut(auth);
    }
    // Update user Information
    const updateUserInfo = (userinfo) => {
        return updateProfile(auth.currentUser, userinfo)
    }
    // On State changed
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        });

        return () => {
            return unsubscribe();
        }
    }, []);
    const authInfo = { createUser, login, logOut,handleResetPass,allPosts, setAllPosts, updateUserInfo, loading, user }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;