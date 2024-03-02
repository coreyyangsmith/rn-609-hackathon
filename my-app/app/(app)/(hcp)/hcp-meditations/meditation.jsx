import { useLocalSearchParams } from 'expo-router'
import React from 'react'
import { ScrollView, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper'

const meditation = () => {
    const params = useLocalSearchParams();
    const { response } = params;

    const styles = StyleSheet.create({
        container: {
            width: '100%',
        },
        content: {
            alignItems: 'center',
            padding: 20,
        },
        title: {
            fontSize: 24,
            textAlign: 'center',
            marginBottom: 10,
        },
        response: {
            fontSize: 16, // Adjust font size as needed
        },
    });

    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.content}>
            <Text style={styles.title}>Meditation Routine</Text>
            <Text style={styles.response}>{response}{response}{response}{response}{response}{response}</Text>
        </ScrollView>
    )
}

export default meditation