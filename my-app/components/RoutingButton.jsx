// Imports
import * as React from 'react';
import { Button } from 'react-native-paper';
import * as Linking from 'expo-linking';
import { Link } from 'expo-router';

// Parameters

const RoutingButton = (props) => (
    <Link href={props.route}>
        <Button
            style={{ width: 325 }}
            icon={props.icon}
            mode="elevated"
            compact={true}
        >
            {props.text}
        </Button>
    </Link>
);

export default RoutingButton;