import { View, Text } from "react-native";
import { formatDistanceToNow } from "date-fns";

const SetListItem = ({ set }) => {
  const timeStamp = parseInt(set._id.substr(0, 8), 16) * 1000;
  const createdAt = new Date(timeStamp);
  return (
    <View className=" bg-white my-2 p-3 rounded-md">
      <Text className=" font-bold mb-2">
        {set.reps} X {set.weight}
      </Text>
      <Text className="text-gray-500">
        {formatDistanceToNow(createdAt)} ago
      </Text>
    </View>
  );
};

export default SetListItem;
