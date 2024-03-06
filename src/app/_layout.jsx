import { Stack } from "expo-router";

function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Exercises" }} />
    </Stack>
  );
}

export default RootLayout;
