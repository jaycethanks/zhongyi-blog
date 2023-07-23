import { GraphQLClient } from 'graphql-request';

const client = new GraphQLClient(process.env.NEXT_PUBLIC_GRAPHQL_API_URL || '');
client.setHeader('uid', process.env.NEXT_PUBLIC_USERID || '');

export default client;
