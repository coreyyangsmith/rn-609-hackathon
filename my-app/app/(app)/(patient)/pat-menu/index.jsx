import { View, Pressable, Text, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function Page() {
  return (
    <View style={styles.container}>
      <StyledLink
        text="Pre-Family Meeting Questionnaire"
        route="pat-questionnaire"
      />
      <StyledLink
        text="Previous Family Meeting Recordings"
        route="pat-recordings"
      />
      <StyledLink text="Guided Meditations" route="pat-meditations" />
      <StyledLink
        text="Resources for Practical Matters"
        route="pat-resources"
      />
    </View>
  );
}

const StyledLink = ({ text, route }) => (
  <Link href={route} asChild>
    <Pressable style={styles.button}>
      <Text style={styles.buttonText}>{text}</Text>
    </Pressable>
  </Link>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  button: {
    backgroundColor: "#007bff",
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
    width: 250,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
});
