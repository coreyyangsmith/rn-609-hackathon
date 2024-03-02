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
            <NavigationButton text={"Information About Grief"} icon={"account-box"} route={"/"} />
            <View style={{ height: 20 }} />
            <NavigationButton text={"Community Supports"} icon={"account-box"} route={"/"} />
            <View style={{ height: 20 }} />
            <NavigationButton text={"Information About Funerals"} icon={"account-box"} route={"/"} />
            <View style={{ height: 20 }} />
            <NavigationButton text={"Documents to Collect"} icon={"account-box"} route={"/"} />
            <View style={{ height: 20 }} />
            <NavigationButton text={"Financial Information"} icon={"account-box"} route={"/"} />
            <View style={{ height: 20 }} />
            <NavigationButton text={"Further Resources"} icon={"account-box"} route={"/"} />
        </View>
    );
}

