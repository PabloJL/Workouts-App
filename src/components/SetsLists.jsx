import { View, Text, ActivityIndicator, FlatList } from "react-native";
import { GraphQLClient, gql } from "graphql-request";
import { useQuery } from "@tanstack/react-query";
import client from "../graphqlClient";

const setsQuery = gql`
  query sets($exercise: String!) {
    sets(exercise: $exercise) {
      documents {
        _id
        exercise
        reps
        weight
      }
    }
  }
`;

const SetsLists = ({ ListHeaderComponent, exerciseName }) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["sets", exerciseName],
    queryFn: () => client.request(setsQuery, { exercise: exerciseName }),
  });

  if (isLoading) {
    return <ActivityIndicator />;
  }
  if (error) {
    return <Text>Failed to fetch info</Text>;
  }

  return (
    <FlatList
      ListHeaderComponent={ListHeaderComponent}
      showsVerticalScrollIndicator={false}
      data={data?.sets.documents}
      renderItem={({ item }) => (
        <Text className=" bg-white mt-3 p-3 rounded-md overflow-hidden">
          {item.reps} X {item.weight}
        </Text>
      )}
    />
  );
};

export default SetsLists;
