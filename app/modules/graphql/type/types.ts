import { GraphQLObjectType, GraphQLNonNull, GraphQLList} from 'graphql';
import UserType from './users';

const Types: { [key: string]: GraphQLObjectType<any, any, {
  [key: string]: any;
}> } = {
  user: UserType
};

function getType(name: string) {
  return Types[name];
}

function getTypes(name: string) {
  return new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(Types[name])))
}

export default { getType, getTypes };