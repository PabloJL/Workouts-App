import { View, Text } from "react-native";
import { useLocalSearchParams } from "expo-router";
import exercises from "../../assets/data/exercises.json";
import { Stack } from "expo-router";

export default function ExcerciseDetailsScreen() {
  const params = useLocalSearchParams();

  const exercise = exercises.find((item) => item.name === params.name);

  if (!exercise) {
    return <Text>Exercise not found </Text>;
  }
  return (
    <View className=" p-3 gap-3">
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
        <Text className="text-base leading-5">{exercise.instructions}</Text>
      </View>
    </View>
  );
}
