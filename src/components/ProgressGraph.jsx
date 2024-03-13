import { View, Text } from "react-native";
import { LineGraph } from "react-native-graph";
import React from "react";

const idToDate = (id) => {
  const timeStamp = parseInt(id.substr(0, 8), 16) * 1000;
  return new Date(timeStamp);
};

const ProgressGraph = ({ sets }) => {
  const points = sets.map((set) => ({
    date: idToDate(set._id),
    value: set.reps * set.weight,
  }));

  return (
    <View className="bg-white p-3 rounded-md  gap-3 mb-2">
      <Text>ProgressGraph</Text>
      <LineGraph
        points={points}
        animated={false}
        color="#4484B2"
        className="w-full h-52"
      />
    </View>
  );
};

export default ProgressGraph;
