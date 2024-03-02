// Imports
import * as React from 'react';
import { Button } from 'react-native-paper';
import * as Linking from 'expo-linking';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-paper';

// Parameters

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '85%',
    }

});

const LabelInputContainer = (props) => (
    <View style={styles.container}>
        <Text style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            {props.text}
        </Text>
        <TextInput
            label={props.label}
            mode='outlined'
            dense={true}
            style={{ width: '65%' }}
            secureTextEntry={props.secure}
        />
    </View>
);

export default LabelInputContainer;