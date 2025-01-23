// TIP: Port must be a number, not a string!
const server = process.env.AZURE_SQL_SERVER;
const database = process.env.AZURE_SQL_DATABASE;
const port = +process.env.AZURE_SQL_PORT;
const type = process.env.AZURE_SQL_AUTHENTICATIONTYPE;
const user = process.env.AZURE_SQL_USER;
const password = process.env.AZURE_SQL_PASSWORD;

const noPasswordConfig = {
  server,
  port,
  database,
  authentication: {
    type
  },
  options: {
    encrypt: true
  }
};

const passwordConfig = {
  server,
  port,
  database,
  user,
  password,
  options: {
    encrypt: true
  }
};

module.exports = {
    noPasswordConfig: noPasswordConfig,
    passwordConfig: passwordConfig
};
