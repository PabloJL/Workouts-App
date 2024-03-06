import { Text, View, Pressable } from "react-native";
import { Link } from "expo-router";

function ExcerciseListItem({ item }) {
  return (
    <Link href={`/${item.name}`} asChild>
      <Pressable className=" bg-white p-3 rounded-xl gap-1 shadow-sm">
        <Text className=" text-xl font-medium">{item.name}</Text>
        <Text className=" text-gray-600">
          <Text className=" capitalize">
            {item.muscle} | {item.equipment}
          </Text>
        </Text>
      </Pressable>
    </Link>
  );
}

export default ExcerciseListItem;
