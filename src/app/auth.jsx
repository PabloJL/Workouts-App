import { Redirect, Stack } from "expo-router";
import { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { useAuth } from "../providers/AuthContext";

const AuthScreen = () => {
  const [localUserName, setLocalUserName] = useState("");
  const { setUserName, username } = useAuth();

  const onSignIn = () => {
    setUserName(localUserName);
  };

  if (username) {
    return <Redirect href={"/"} />;
  }

  return (
    <View className="flex-1 justify-center p-3 gap-3 bg-white">
      <Stack.Screen options={{ title: "Sign-in" }} />
      <Text className=" font-semibold text-xl text-gray-500 ">Username</Text>
      <TextInput
        className="p-3 rounded-md border border-gray-300 mb-3"
        value={localUserName}
        onChangeText={setLocalUserName}
        placeholder="Username"
      />
      <Button title="Sign in" onPress={onSignIn} />
    </View>
  );
};

export default AuthScreen;
