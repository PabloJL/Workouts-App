import { StatusBar } from "expo-status-bar";
import { Text, View, FlatList } from "react-native";
import exercises from "../../assets/data/exercises.json";
import ExcerciseListItem from "../components/ExcerciseListItem";

export default function App() {
  return (
    <View className=" flex-1 justify-center bg-gray-100 p-3">
      <FlatList
        contentContainerStyle={{ gap: 10 }}
        data={exercises}
        keyExtractor={(item, index) => item.name + index}
        renderItem={({ item }) => <ExcerciseListItem item={item} />}
      />
      <StatusBar />
    </View>
  );
}
