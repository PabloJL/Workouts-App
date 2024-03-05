import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import exercises from "./assets/data/exercises.json";

export default function App() {
  const exercise = exercises[0];
  // console.log(exercises);

  return (
    <View className=" flex-1 justify-center bg-gray-100 p-3">
      <View className=" bg-white p-3 rounded-xl gap-1">
        <Text className=" text-xl font-medium">{exercise.name}</Text>
        <Text className=" text-gray-600">
          {exercise.muscle.toUpperCase()} | {exercise.equipment.toUpperCase()}
        </Text>
      </View>

      <StatusBar />
    </View>
  );
}
