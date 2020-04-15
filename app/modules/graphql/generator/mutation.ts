import { GraphQLNonNull } from 'graphql';
import MutationResolver from '../resolver/mutation';
import Types from '../type/types';

export default (name: string) => {

  const field = {
    type: Types.getTypes(name),
    args: {}
  }

  const fields = Types.getType(name).getFields();
  Object.keys(fields).map(key => (key != 'id') ? field['args'][key] = { type: new GraphQLNonNull(fields[key].type) } : undefined);
  field['resolve'] = (_, args) => MutationResolver.insert(name, args, 'id' in fields);

  return field;
}