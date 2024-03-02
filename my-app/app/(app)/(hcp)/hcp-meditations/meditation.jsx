import { useLocalSearchParams } from 'expo-router'
import React from 'react'
import { ScrollView, StyleSheet } from 'react-native';
import { Button, Surface, Text } from 'react-native-paper'
import { Audio } from 'expo-av'

const meditation = () => {
    const params = useLocalSearchParams();
    const { response, audio } = params;

    const playAudio = async () => {
        console.log('playing audio')

    }
    const styles = StyleSheet.create({
        container: {
            width: '100%',
            flex: 1,
        },
        content: {
            alignItems: 'center',
            padding: 20,
            flexGrow: 1,
        },
        title: {
            fontSize: 24,
            textAlign: 'center',
            marginBottom: 10,
        },
        response: {
            fontSize: 16, // Adjust font size as needed
        },
        surface: {
            padding: 8,
            width: '95%',
            flexGrow: 1,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 16,
        },
    });

    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.content}>
            <Text style={styles.title}>Meditation Routine</Text>
            <Surface style={styles.surface} elevation={4}>
                <Text style={styles.response}>{response}</Text>
            </Surface>

            {audio ? (
                <Surface style={styles.surface} elevation={4}>
                    <Button onPress={playAudio}>Play Audio</Button>
                </Surface>
            ) : (
                <Text style={styles.response}>Audio will not be included</Text>
            )}
        </ScrollView>
    )
}

export default meditation