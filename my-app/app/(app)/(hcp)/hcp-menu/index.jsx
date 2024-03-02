import { View, Pressable, Text, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function Page() {
  return (
    <View style={styles.container}>
      <StyledLink
        text="Family Meeting Questionnaires"
        route="hcp-questionnaire"
      />
      <StyledLink text="Family Meeting Recorder" route="hcp-recordings" />
      <StyledLink text="Guided Meditations" route="hcp-meditations" />
      <StyledLink text="Consult Spiritual Health" route="hcp-consultation" />
      <StyledLink text="Resources for Professionals" route="hcp-resources" />
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
    backgroundColor: "#7D0DC3",
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
