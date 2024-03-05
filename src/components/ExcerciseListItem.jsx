import { Text, View } from "react-native";

function ExcerciseListItem({ item }) {
  return (
    <View className=" bg-white p-3 rounded-xl gap-1">
      <Text className=" text-xl font-medium">{item.name}</Text>
      <Text className=" text-gray-600">
        {item.muscle.toUpperCase()} | {item.equipment.toUpperCase()}
      </Text>
    </View>
  );
}

export default ExcerciseListItem;
