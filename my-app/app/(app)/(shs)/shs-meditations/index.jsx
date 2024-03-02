import { Pressable, Text, View } from "react-native";
import { Link } from "expo-router";

export default function Page() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', width: '100', height: '100' }}>
            <Text>Meditations Page</Text>
            <Text>Mindfulness</Text>

            <Text>Stress Reduction</Text>
            <Text>Anxiety Reduction</Text>
            <Text>Caregiver Burnout</Text>
            <Text>Grief Management</Text>
        </View>
    );
}
