const env = process.env;
const environments = {
  server: {
    name: env.SERVER_NAME,
    user: env.SERVER_USER,
    password: env.SERVER_PASSWORD,
    db: env.SERVER_DATABASE,
  },
};

export default environments;
