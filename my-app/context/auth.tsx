import { useRouter, useSegments } from 'expo-router';
import * as React from 'react';
import { useState, useEffect, useContext, createContext } from 'react';

const AuthContext = createContext<any>('');

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }: React.PropsWithChildren) {
    const rootSegment = useSegments()[0];
    const router = useRouter();
    const [user, setUser] = useState<string | undefined>('TestUser');

    useEffect(() => {
        if (user === undefined) return;

        // If we don't have a user, and the user is not on the authentication screen
        // Else take the user to the app screen
        if (!user && rootSegment !== '(auth)') {
            router.replace('/');
        } else if (user && rootSegment !== "(app)") {
            router.replace('/');
        }
    }, [user, rootSegment])

    return (
        <AuthContext.Provider
            value={{
                user: user,
                signIn: () => {
                    console.log('Sign In')
                    setUser("TestUser")
                    console.log(user)
                },
                signOut: () => {
                    setUser("");
                }
            }}>

        </AuthContext.Provider>

    )
}