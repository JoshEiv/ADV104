import { View, Text, TextInput, Button, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function LoginScreen() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Login</Text>

      <TextInput
        placeholder="Email"
        style={{ borderWidth: 1, width: 200, marginBottom: 10, padding: 5 }}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        style={{ borderWidth: 1, width: 200, marginBottom: 10, padding: 5 }}
      />

      <Button title="Login" onPress={() => router.push("./home")} />

      <TouchableOpacity onPress={() => router.push("./signup")}>
        <Text style={{ color: "blue", marginTop: 15 }}>
          No account yet? Signup
        </Text>
      </TouchableOpacity>
    </View>
  );
}
