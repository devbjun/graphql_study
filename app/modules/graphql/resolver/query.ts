import db from '../../db/index';

const select = async (table, args) => {
  return db.query(`SELECT * FROM "${table}"` + Object.keys(args).map((key, i) => ` ` + ((i == 0) ? `WHERE` : `AND`) + ` "${key}"=` + ((typeof args[key] === 'string') ? `'${args[key]}'` : `${args[key]}`)).reduce((prev, cur) => prev + cur) + `;`)
  .then(data => data.rows)
  .catch(err => err)
}

const selectAll = async (table) => {
  return db.query(`SELECT * FROM "${table}";`)
  .then(data => data.rows)
  .catch(err => err)
}

export default { select, selectAll };