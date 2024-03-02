import { Stack } from "expo-router";

export default function AppEntry() {
    return (
        <Stack>
            <Stack.Screen name='/(hcp)/' options={{ headerShown: false }} />
            <Stack.Screen name='/(patient)/' options={{ headerShown: false }} />
        </Stack>
    )
}