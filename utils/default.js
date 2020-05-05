const jwtsec = process.env.jwtsecret || 'secretsecret';
const dburl = process.env.dburl || 'mongodb://localhost:27017/devshare';

defaults = {
  jwtsecret: jwtsec,
  dburl: dburl,
};

module.exports = defaults;
