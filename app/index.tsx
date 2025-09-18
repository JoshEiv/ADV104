import { View, Text, Button } from "react-native";
import { useRouter } from "expo-router";

export default function LandingScreen() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Welcome!</Text>
      <Button title="Login" onPress={() => router.push("./login")} />
      <Button title="Signup" onPress={() => router.push("./signup")} />
    </View>
  );
}
