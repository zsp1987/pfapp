import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={sytles.container}>
      <Text>Home</Text>
      <Link href="/details/1">View the First Details</Link>
      <Link href="/details/2">View the soncd Details</Link>
    </View>
  );
}

const sytles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
