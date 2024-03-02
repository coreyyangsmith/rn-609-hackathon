import { Link } from 'expo-router';
import * as React from 'react';
import { Button } from 'react-native-paper';

const NavigationButton = (props) => (
    <Link href={props.route} asChild>
        <Button
            style={{ padding: '4px' }}
            icon={props.icon}
            mode="contained"
            onPress={() => console.log('Pressed')}
        >
            {props.text}
        </Button>
    </Link>
);

export default NavigationButton;