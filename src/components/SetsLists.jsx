import { View, Text, ActivityIndicator, FlatList } from "react-native";
import { GraphQLClient, gql } from "graphql-request";
import { useQuery } from "@tanstack/react-query";
import client from "../graphqlClient";

const setsQuery = gql`
  query exercises {
    sets {
      documents {
        _id
        excercise
        reps
        weight
      }
    }
  }
`;

const SetsLists = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["sets"],
    queryFn: () => client.request(setsQuery),
  });

  if (isLoading) {
    return <ActivityIndicator />;
  }
  if (error) {
    return <Text>Failed to fetch info</Text>;
  }

  return (
    <FlatList
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
