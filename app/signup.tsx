import { View, Text, TextInput, Button, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function SignupScreen() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Signup</Text>

      <TextInput
        placeholder="Email"
        style={{ borderWidth: 1, width: 200, marginBottom: 10, padding: 5 }}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        style={{ borderWidth: 1, width: 200, marginBottom: 10, padding: 5 }}
      />
      <TextInput
        placeholder="Confirm Password"
        secureTextEntry
        style={{ borderWidth: 1, width: 200, marginBottom: 10, padding: 5 }}
      />

      <Button title="Signup" onPress={() => router.push("./login")} />

      <TouchableOpacity onPress={() => router.push("./login")}>
        <Text style={{ color: "blue", marginTop: 15 }}>
          Already have an account? Login
        </Text>
      </TouchableOpacity>
    </View>
  );
}
