import { StatusBar } from "expo-status-bar";
import { Text, View, FlatList, ActivityIndicator } from "react-native";
import exercises from "../../assets/data/exercises.json";
import ExcerciseListItem from "../components/ExcerciseListItem";
import { useQuery } from "@tanstack/react-query";
import { gql, request } from "graphql-request";
import client from "../graphqlClient";

const url = "https://yongqing.stepzen.net/api/wistful-sloth/__graphql";

const exercisesQuery = gql`
  query exercises($muscle: String, $name: String) {
    exercises(muscle: $muscle, name: $name) {
      name
      muscle
      equipment
    }
  }
`;

export default function ExercisesScreen() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["exercises"],
    queryFn: () => client.request(exercisesQuery),
  });

  if (isLoading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return <Text>Failed to fetch exercises</Text>;
  }

  return (
    <View className=" flex-1 justify-center bg-gray-100 p-3">
      <FlatList
        contentContainerStyle={{ gap: 10 }}
        data={data?.exercises}
        keyExtractor={(item, index) => item.name + index}
        renderItem={({ item }) => <ExcerciseListItem item={item} />}
      />
      <StatusBar />
    </View>
  );
}