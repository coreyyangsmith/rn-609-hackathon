import { Button, StyleSheet } from "react-native";

import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
import { useAuth } from "@/context/auth";
import { TextInput } from "react-native-paper";
import { useState } from "react";
import { useRouter } from "expo-router";

export default function TabOneScreen() {
  const router = useRouter();
  const { signIn } = useAuth();

  const [formData, setFormData] = useState({
    user_id: "",
    password: "",
  });

  const [user_idData, setuser_idData] = useState("");
  const [passwordData, setPasswordData] = useState("");

  const handleFormDataChange = (field, text) => {
    if (field === "user_id") setuser_idData(text);
    if (field === "password") setPasswordData(text);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />

      <TextInput
        style={{ width: "80%" }}
        label="user_id"
        mode="outlined"
        value={user_idData}
        onChangeText={(text) => {
          handleFormDataChange("user_id", text);
        }}
      />
      <View style={{ height: 10 }} />
      <TextInput
        style={{ width: "80%" }}
        placeholder="Password"
        secureTextEntry
        mode="outlined"
        value={passwordData}
        onChangeText={(text) => {
          handleFormDataChange("password"), text;
        }}
      />
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <Button title="Sign In" color={"orange"} onPress={signIn} />
      <Button
        title="Register"
        color={"orange"}
        onPress={() => router.replace("/register")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100",
    height: "100",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
