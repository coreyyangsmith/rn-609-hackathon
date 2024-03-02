import React, { useContext } from 'react';
import { Slot } from 'expo-router';
import { useAuth } from '../../context/auth';

export default function AuthLayout() {
    const auth = useAuth();
    console.log('auth:', auth)

    // Redirect to app if already authenticated
    if (auth) {
        // Use Expo Router's navigate method to redirect to the app
        // This is a simplified example, actual implementation might differ
        console.log('logged in')
        return null; // Render nothing while redirecting
    }

    // Render the login page or any other authentication-related screen
    return <Slot />;
}
