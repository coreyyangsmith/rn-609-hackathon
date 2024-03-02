import { Pressable, Text, View } from "react-native";
import { Link } from "expo-router";
import { Button } from 'react-native-paper';
import NavigationButton from "../../../components/NavigationButton"
import RoutingButton from "../../../components/RoutingButton";

export default function Page() {
    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            width: '100',
            height: '100',
            border: '1px solid red',
        }}
        >
            <Text style={{ color: 'red' }}>Patient Links</Text>

            <RoutingButton
                text={"Pre-Family Meeting Questionnaire"}
                icon={"account-box"}
                route={'pat-questionnaire'}
            />
            <View style={{ height: 20 }} />
            <RoutingButton
                text={"Previous Family Meeting Recordings"}
                icon={"account-box"}
                route={"pat-recordings"} />
            <View style={{ height: 20 }}
            />
            <RoutingButton
                text={"Guided Meditations"}
                icon={"account-box"}
                route={"pat-meditations"}
            />
            <View style={{ height: 20 }} />
            <RoutingButton
                text={"Resources for Practical Matters"}
                icon={"account-box"}
                route={"pat-resources"}
            />
            <View style={{ height: 20 }} />
        </View>
    );
}

