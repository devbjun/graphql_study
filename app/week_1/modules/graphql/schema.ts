import { GraphQLSchema, GraphQLObjectType, GraphQLNonNull, GraphQLList, GraphQLID } from 'graphql';
import UserType from './type/users';
import UserResolver from './resolver/users';

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: {
      type: UserType,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve: UserResolver.user
    },
    users: {
      type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(UserType))),
      resolve: UserResolver.users
    }
  }
});

const schema = new GraphQLSchema({
  query: RootQuery
});

export default schema;