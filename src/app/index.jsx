import { StatusBar } from "expo-status-bar";
import { Text, View, FlatList, ActivityIndicator, Button } from "react-native";
import exercises from "../../assets/data/exercises.json";
import ExcerciseListItem from "../components/ExcerciseListItem";
import { useInfiniteQuery } from "@tanstack/react-query";
import { gql, request } from "graphql-request";
import client from "../graphqlClient";
import { Redirect } from "expo-router";
import { useAuth } from "../providers/AuthContext";

const url = "https://yongqing.stepzen.net/api/wistful-sloth/__graphql";

const exercisesQuery = gql`
  query exercises($muscle: String, $name: String, $offset: Int) {
    exercises(muscle: $muscle, name: $name, offset: $offset) {
      name
      muscle
      equipment
    }
  }
`;

export default function ExercisesScreen() {
  const { data, isLoading, error, fetchNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ["exercises"],
      queryFn: ({ pageParam }) =>
        client.request(exercisesQuery, { offset: pageParam }),
      initialPageParam: 0,
      getNextPageParam: (lastPage, pages) => pages.length * 10,
    });

  const { username } = useAuth();

  const loadMore = () => {
    if (isFetchingNextPage) {
      return;
    }
    fetchNextPage();
  };

  if (isLoading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return <Text>Failed to fetch exercises</Text>;
  }

  if (!username) {
    return <Redirect href={"/auth"}></Redirect>;
  }

  const exercises = data?.pages.flatMap((page) => page.exercises);

  return (
    <View className=" flex-1 justify-center bg-gray-100 p-3">
      <FlatList
        contentContainerStyle={{ gap: 10 }}
        showsVerticalScrollIndicator={false}
        data={exercises}
        keyExtractor={(item, index) => item.name + index}
        renderItem={({ item }) => <ExcerciseListItem item={item} />}
        onEndReached={loadMore}
        onEndReachedThreshold={1}
      />
      {/* <Button title="Load More" onPress={fetchNextPage} /> */}
      <StatusBar />
    </View>
  );
}
