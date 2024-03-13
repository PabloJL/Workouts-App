import { View, Text } from "react-native";
import { LineGraph } from "react-native-graph";
import React from "react";

const ProgressGraph = () => {
  const points = [
    {
      date: new Date("2024-01-01"),
      value: 10,
    },
    {
      date: new Date("2024-01-02"),
      value: 5,
    },
    {
      date: new Date("2024-01-03"),
      value: 20,
    },
  ];
  return (
    <View className=" gap-3">
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
