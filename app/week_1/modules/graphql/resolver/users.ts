import db from '../../db/index';

const user = async (_, args) => {
  return db.query(`SELECT * FROM "user" WHERE id=${args.id};`)
    .then(data => data.rows[0])
    .catch(err => err);
};

const users = async (_, args) => {
  return db.query(`SELECT * FROM "user";`)
    .then(data => data.rows)
    .catch(err => err);
};

export default { user, users };