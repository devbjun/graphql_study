import db from '../../db/index';
import query from './query';

const insert = async (table, args, isAuto: Boolean) => {
  return db.query(`INSERT INTO "${table}" VALUES (` + ((isAuto) ? `DEFAULT, ` : ``) + Object.keys(args).map((key, i) => ((i == 0) ? `` : `, `) + ((typeof args[key] === 'string') ? `'${args[key]}'` : `${args[key]}`)).reduce((prev, cur) => prev + cur) + `);`)
  .then(() => query.select(table, args))
  .catch(err => err)
}

export default { insert };