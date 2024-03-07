import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { useState } from "react";

const NewSetInput = () => {
  const [reps, setReps] = useState("");
  const [weight, setWeight] = useState("");
  const addSet = () => {
    console.warn("Add Set:", reps, weight);
    setReps("");
    setWeight("");
  };

  return (
    <View className="rounded-md flex-row gap-3 items-center">
      <TextInput
        defaultValue={reps}
        onChangeText={setReps}
        placeholder="Reps"
        className=" p-3 flex-1 rounded-md border border-gray-300"
        keyboardType="numeric"
      />
      <TextInput
        defaultValue={weight}
        onChangeText={setWeight}
        placeholder="Weight"
        className=" p-3 flex-1 rounded-md border border-gray-300"
        keyboardType="numeric"
      />
      <Button title="Add" onPress={addSet} />
    </View>
  );
};

export default NewSetInput;
