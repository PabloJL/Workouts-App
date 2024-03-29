import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { useState } from "react";
import { gql } from "graphql-request";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import client from "../graphqlClient";
import { useAuth } from "../providers/AuthContext";

const mutationDocument = gql`
  mutation insertSet($newSet: NewSet!) {
    insertSet(
      collection: "sets"
      database: "workouts"
      dataSource: "Cluster0"
      document: $newSet
    ) {
      insertedId
    }
  }
`;

const NewSetInput = ({ exerciseName }) => {
  const [reps, setReps] = useState("");
  const [weight, setWeight] = useState("");
  const queryClient = useQueryClient();
  const { username } = useAuth();

  const { mutate, error, isError, isPending } = useMutation({
    mutationFn: (newSet) => {
      client.request(mutationDocument, { newSet });
    },
    onSuccess: () => {
      setReps("");
      setWeight("");
      queryClient.invalidateQueries({ queryKey: ["sets", exerciseName] });
    },
  });

  const addSet = () => {
    const newSet = {
      username,
      exercise: exerciseName,
      reps: Number.parseInt(reps),
    };
    if (Number.parseFloat(weight)) {
      newSet.weight = Number.parseFloat(weight);
    }
    mutate(newSet);
  };

  return (
    <View className="rounded-md flex-row gap-3 items-center">
      <View className=" flex-row gap-2">
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

        <Button title={isPending ? "Adding" : "Add"} onPress={addSet} />
      </View>
      {isError && <Text className="text-red-500">Failed to add</Text>}
    </View>
  );
};

export default NewSetInput;
