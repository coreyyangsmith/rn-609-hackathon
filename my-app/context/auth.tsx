import { useRouter, useSegments } from 'expo-router';
import * as React from 'react';
import { useState, useEffect, useContext, createContext } from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';

const AuthContext = createContext<any>('');

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }: React.PropsWithChildren) {
    const [user, setUser] = useState<string | undefined>('TestUser');

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
            )
        </AuthContext.Provider>
    )
}