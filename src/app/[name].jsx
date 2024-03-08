import { View, Text, ScrollView, ActivityIndicator } from "react-native";
import { useLocalSearchParams } from "expo-router";
import exercises from "../../assets/data/exercises.json";
import { Stack } from "expo-router";
import { useState } from "react";
import { gql } from "graphql-request";
import { useQuery } from "@tanstack/react-query";
import client from "../graphqlClient";
import NewSetInput from "../components/NewSetInput";
import SetsLists from "../components/SetsLists";

const exerciseQuery = gql`
  query exercises($name: String) {
    exercises(name: $name) {
      equipment
      instructions
      muscle
      name
    }
  }
`;

export default function ExcerciseDetailsScreen() {
  const { name } = useLocalSearchParams();

  const { data, isLoading, error } = useQuery({
    queryKey: ["excercises", name],
    queryFn: () => client.request(exerciseQuery, { name }),
  });

  const [isExpanded, setIsExpanded] = useState(false);

  if (isLoading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return <Text>Failed to fetch exercise</Text>;
  }

  const exercise = data?.exercises[0];

  if (!exercise) {
    return <Text>Exercise not found </Text>;
  }
  return (
    <ScrollView className=" p-3 gap-3">
      <Stack.Screen options={{ title: exercise.name }} />
      <View className=" bg-white p-3 rounded-md">
        <Text className=" text-xl font-medium">{exercise.name}</Text>
        <Text className=" text-gray-600">
          <Text className=" capitalize">
            {exercise.muscle} | {exercise.equipment}
          </Text>
        </Text>
      </View>
      <View className=" bg-white p-3 rounded-md">
        <Text
          className="text-base leading-5"
          numberOfLines={isExpanded ? 0 : 4}
        >
          {exercise.instructions}
        </Text>
        <Text
          className="self-center p-3 font-semibold text-gray-500"
          onPress={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? "See Less" : "See More"}
        </Text>
      </View>
      <View className=" bg-white p-3 rounded-md">
        <NewSetInput />
      </View>
      <View>
        <SetsLists />
      </View>
    </ScrollView>
  );
}
