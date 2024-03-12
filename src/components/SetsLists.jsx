import { View, Text, ActivityIndicator, FlatList } from "react-native";
import { GraphQLClient, gql } from "graphql-request";
import { useQuery } from "@tanstack/react-query";
import client from "../graphqlClient";
import { useAuth } from "../providers/AuthContext";

const setsQuery = gql`
  query sets($exercise: String!, $username: String!) {
    sets(exercise: $exercise, username: $username) {
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
  const { username } = useAuth();
  const { data, isLoading, error } = useQuery({
    queryKey: ["sets", exerciseName],
    queryFn: () =>
      client.request(setsQuery, { exercise: exerciseName, username }),
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
