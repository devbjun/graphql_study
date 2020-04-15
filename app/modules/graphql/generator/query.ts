import QueryResolver from '../resolver/query';
import Types from '../type/types';

export default (name: string, isAll?: boolean) => {

  const field = {
    type: Types.getTypes(name),
    args: {}
  }

  if (!isAll) {

    const fields = Types.getType(name).getFields();
    Object.keys(fields).map(key => field['args'][key] = { type: fields[key].type });
    field['resolve'] = async (_, args) => QueryResolver.select(name, args);

  }
  else {
    field['resolve'] = async () => QueryResolver.selectAll(name);
  }

  return field;
}