import {
  ApolloClient, ApolloProvider, InMemoryCache
} from "@apollo/client";
import { FC } from "react";

const client = new ApolloClient({
  uri: 'https://48p1r2roz4.sse.codesandbox.io',
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