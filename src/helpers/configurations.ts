const env = process.env;
const environments = {
  server: {
    db_username: env.DB_USERNAME,
    db_pwd: env.DB_PWD,
    db_server: env.DB_SERVER,
    db_port: env.DB_PORT,
    db_name: env.DB_NAME,
  },
  uri: {
    base_url: env.BASE_URL,
    api_url: env.API_URL,
  },
};

export default environments;
