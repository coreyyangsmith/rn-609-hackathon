// Imports
import * as React from 'react';
import { Button } from 'react-native-paper';
import * as Linking from 'expo-linking';

// Parameters

const NavigationButton = (props) => (
    <Button
        style={{ width: 325 }}
        icon={props.icon}
        mode="elevated"
        compact={true}
        onPress={() => Linking.openURL(`${props.route}`)}
    >
        {props.text}
    </Button>
);

export default NavigationButton;