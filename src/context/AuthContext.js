import { createContext } from "react";

const AuthContext = createContext({ logado: true });

const AuthProvider = ({ children }) => {
    return (
        <AuthContext.Provider value=({ logado: false }) >
    )
}