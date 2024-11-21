import React, { createContext } from 'react';



const AuthContext = createContext(null);




const AuthProvider = ({children}) => {

    const authInfo ={
        name : 'name of your gf'
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;