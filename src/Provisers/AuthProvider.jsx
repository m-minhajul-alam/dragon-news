import { createContext, useEffect, useState } from "react";
import {
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    // ................................................................Create User
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // ................................................................Log in
    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    // ................................................................Log out
    const logOut = () => {
        return signOut(auth);
    }
    // ................................................................Use effect
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => {
            unSubscribe();
        };
    }, []);
    // ................................................................Povidor value
    const authInfo = {
        user,
        createUser,
        logIn,
        logOut
    }

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>

        </div>
    );
};

export default AuthProvider;