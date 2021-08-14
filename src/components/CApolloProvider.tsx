import {
  ApolloClient, ApolloProvider, InMemoryCache
} from "@apollo/client";
import { FC } from "react";

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache: new InMemoryCache()
});

const CApolloProvider: FC = ({ children }) => {
  return (
    <ApolloProvider client={client}>
      {children}
    </ApolloProvider>
  );
}

export default CApolloProvider;