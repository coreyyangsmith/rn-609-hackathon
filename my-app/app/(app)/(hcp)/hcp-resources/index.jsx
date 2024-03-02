import { Pressable, Text, View } from "react-native";
import { Link } from "expo-router";
import { Button } from 'react-native-paper';
import NavigationButton from "../../../../components/NavigationButton";

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
            <NavigationButton
                text={"Physiologic Changes at End-of-Life"}
                icon={"account-box"}
                route={"https://www.google.ca/search?q=physiologic+changes+at+end-of-life"}
            />
            <View style={{ height: 20 }} />
            <NavigationButton
                text={"Compassion Building"}
                icon={"account-box"}
                route={"https://www.google.ca/search?q=compassion+building"} />
            <View style={{ height: 20 }}
            />
            <NavigationButton
                text={"Improve Self-Efficacy in Palliative Care"}
                icon={"account-box"}
                route={"https://www.google.ca/search?q=improve+self-efficacy+in+palliative+care"}
            />
            <View style={{ height: 20 }} />
            <NavigationButton
                text={"Palliative Care Skill Bank"}
                icon={"account-box"}
                route={"https://www.google.ca/search?q=palliative+care+skill+bank"}
            />
            <View style={{ height: 20 }} />
            <NavigationButton
                text={"Symptom Management"}
                icon={"account-box"}
                route={"https://www.google.ca/search?q=symptom+management"}
            />
            <View style={{ height: 20 }} />
            <NavigationButton
                text={"Further Resources"}
                icon={"account-box"}
                route={"https://www.google.ca/search?q=further+resources"}
            />
        </View>
    );
}

