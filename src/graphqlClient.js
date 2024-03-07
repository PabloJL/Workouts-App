import { GraphQLClient } from "graphql-request";

const url = "https://yongqing.stepzen.net/api/wistful-sloth/__graphql";

const apiKey = process.env.EXPO_PUBLIC_GRAPHQL_API_KEY;

const client = new GraphQLClient(url, {
  headers: {
    Authorization: apiKey,
  },
});

export default client;
