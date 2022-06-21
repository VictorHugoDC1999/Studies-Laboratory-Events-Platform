import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4o6k9m50wnd01z2ainia1ze/master',
  cache: new InMemoryCache()
});
