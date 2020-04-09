import { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLInt, GraphQLBoolean } from 'graphql';

const UserType = new GraphQLObjectType({
  name: 'user',
  fields: {
    id: { type: GraphQLID },
    account: { type: GraphQLString },
    password: { type: GraphQLString },
    limit: { type: GraphQLInt },
    isban: { type: GraphQLBoolean },
    created: { type: GraphQLString }
  }
});

export default UserType;