import { createContext, useState } from 'react';

const initialState = {
    user: null,
    auth: false
}
export const UserContext = createContext(initialState);

export const UserProvider = ({children}) => {
    const [user, setUser] = useState({user: null, auth: false});

    const login = (user) => {
        setUser({
            user,
            auth: true
        })
    }

    const logout = () => {
        setUser({
            user: null,
            auth: false
        })
    }

    return <UserContext.Provider value={{user, login, logout}}>
        {children}
    </UserContext.Provider>
}