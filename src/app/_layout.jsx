import { Stack } from "expo-router";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import AuthContextProvider from "../providers/AuthContext";

const client = new QueryClient();

function RootLayout() {
  return (
    <AuthContextProvider>
      <QueryClientProvider client={client}>
        <Stack>
          <Stack.Screen name="index" options={{ title: "Exercises" }} />
        </Stack>
      </QueryClientProvider>
    </AuthContextProvider>
  );
}

export default RootLayout;
