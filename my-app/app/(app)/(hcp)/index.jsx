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
            <Text style={{ color: 'red' }}>HCP Links</Text>
            <RoutingButton
                text={"Family Meeting Questionnaires"}
                icon={"account-box"}
                route={"hcp-questionnaire"}
            />
            <View style={{ height: 20 }} />
            <RoutingButton
                text={"Family Meeting Recorder"}
                icon={"account-box"}
                route={"hcp-recordings"} />
            <View style={{ height: 20 }}
            />
            <RoutingButton
                text={"Guided Meditations"}
                icon={"account-box"}
                route={"hcp-meditations"}
            />
            <View style={{ height: 20 }} />
            <RoutingButton
                text={"Consult Spiritual Health"}
                icon={"account-box"}
                route={"hcp-consultation"}
            />
            <View style={{ height: 20 }} />
            <RoutingButton
                text={"Resources for Professionals"}
                icon={"account-box"}
                route={"hcp-resources"}
            />
            <View style={{ height: 20 }} />
        </View>
    );
}

