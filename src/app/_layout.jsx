import { Stack } from "expo-router";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const client = new QueryClient();

function RootLayout() {
  return (
    <QueryClientProvider client={client}>
      <Stack>
        <Stack.Screen name="index" options={{ title: "Exercises" }} />
      </Stack>
    </QueryClientProvider>
  );
}

export default RootLayout;
