import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);

    const login = (userData) => {
        setCurrentUser(userData); // Guarda los datos de usuario en el contexto
    };

    const logout = () => {
        setCurrentUser(null); // Limpia los datos de usuario en el contexto
    };

    return (
        <AuthContext.Provider value={{ currentUser, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
