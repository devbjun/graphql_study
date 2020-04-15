import { GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLBoolean, GraphQLNonNull } from 'graphql';
import GeneratorMutation from './generator/mutation';
import GeneratorQuery from './generator/query';

import Type from './type/types';

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: GeneratorQuery('user'),
    users: GeneratorQuery('user', true)
  }
});

const RootMutation = new GraphQLObjectType({
  name: 'RootMutationType',
  fields: {
    addUser: GeneratorMutation('user')
  }
})

const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: RootMutation
});

export default schema;