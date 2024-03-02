import React, { useContext, useEffect } from 'react';
import { Slot, useRouter, useSegments } from 'expo-router';
import { useAuth } from '../../context/auth';

export default function AuthLayout() {
    const auth = useAuth();
    const rootSegment = useSegments()[0];
    const router = useRouter();

    const { user } = auth;

    useEffect(() => {
        if (user === undefined) return;

        // If we don't have a user, and the user is not on the authentication screen
        // Else take the user to the app screen
        if (!user && rootSegment !== '(auth)') {
            console.log('redirecting to auth')
            router.replace('/(app)/');
        } else if (user && rootSegment !== "(app)") {
            console.log('redirecting to app')
            router.replace('/(app)/');
        }

    }, [user, rootSegment])



    // Redirect to app if already authenticated
    if (auth) {
        // Use Expo Router's navigate method to redirect to the app
        // This is a simplified example, actual implementation might differ
        console.log('logged in')
        return null; // Render nothing while redirecting
    }

    // Render the login page or any other authentication-related screen
    return <Slot />
}
