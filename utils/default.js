const jwtsec = 'secretsecret' || process.env.jwtsecret;
const dburl = 'mongodb://localhost:27017/devshare' || process.env.dburl;

defaults = {
  jwtsecret: jwtsec,
  dburl: dburl,
};

module.exports = defaults;
