import { Text, View } from "react-native";

function ExcerciseListItem({ item }) {
  return (
    <View className=" bg-white p-3 rounded-xl gap-1 shadow-sm">
      <Text className=" text-xl font-medium">{item.name}</Text>
      <Text className=" text-gray-600">
        <Text className=" capitalize">
          {item.muscle} | {item.equipment}
        </Text>
      </Text>
    </View>
  );
}

export default ExcerciseListItem;
