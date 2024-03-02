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
    username: "",
    password: "",
  });

  const [usernameData, setUsernameData] = useState("");
  const [passwordData, setPasswordData] = useState("");

  const handleFormDataChange = (field, text) => {
    if (field === "username") setUsernameData(text);
    if (field === "password") setPasswordData(text);
  };

    const handleSignIn = async () => {
        try {
            const response = await fetch("http://localhost:3001/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username: usernameData, password: passwordData }),
            });

            if (response.ok) {
                // Handle successful login
                signIn(); // Example function to handle successful login
            } else {
                // Handle unsuccessful login
                console.error("Failed to login:", response.statusText);
            }
        } catch (error) {
            console.error("Error:", error);
            // Handle network errors or other exceptions
        }
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
        label="Username"
        mode="outlined"
        value={usernameData}
        onChangeText={(text) => {
          handleFormDataChange("username", text);
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
          handleFormDataChange("password", text);
        }}
      />
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <Button title="Sign In" color={"orange"} onPress={handleSignIn} />
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
