import { createContext, useCallback, useLayoutEffect, useMemo, useState, type FC, type ReactNode } from "react";
import type { IAuthInfo, IAuthMethods, TAuthContextModel } from "./model/types";
import { useDispatch } from "react-redux";
import { clearAuthToken, setAuthToken } from "./model/authSlice";

const initial = {
    accessToken: '',
    login: () => {},
    logout: () => {},
}

export const AuthContext = createContext<TAuthContextModel>(initial);

export const AuthProvider: FC<{children: ReactNode}> = ({ children }) => {
    const [authInfo, setAuthInfo] = useState<IAuthInfo>({...initial, accessToken: localStorage.getItem('authToken') || ''});

    const dispatch = useDispatch(); 

    const login: IAuthMethods['login'] = useCallback((auth) => {
        setAuthInfo(auth);

        localStorage.setItem('authToken', auth.accessToken)
    }, []);

    const logout: IAuthMethods['logout'] = useCallback(() => {
        setAuthInfo(initial);

        localStorage.removeItem('authToken');

        dispatch(clearAuthToken())
    }, []);

    const contextValue: TAuthContextModel = useMemo(() => ({
        ...authInfo, 
        login,
        logout
    }), [authInfo, login, logout]);

    useLayoutEffect(() => {
        if(authInfo.accessToken) {
            dispatch(setAuthToken(authInfo.accessToken))
        }
    }, [authInfo.accessToken])
   
    return (
        <AuthContext.Provider value={contextValue}>
            {children}   
        </AuthContext.Provider>
    );
}