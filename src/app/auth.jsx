import { Stack } from "expo-router";
import { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";

const AuthScreen = () => {
  const [userName, setUserName] = useState("");
  return (
    <View className="flex-1 justify-center p-3 gap-3 bg-white">
      <Stack.Screen options={{ title: "Sign-in" }} />
      <Text className=" font-semibold text-xl text-gray-500 ">Username</Text>
      <TextInput
        className="p-3 rounded-md border border-gray-300 mb-3"
        value={userName}
        onChangeText={setUserName}
        placeholder="Username"
      />
      <Button title="Sign in" />
    </View>
  );
};

export default AuthScreen;
