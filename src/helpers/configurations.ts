const env = process.env;
const environments = {
  server: {
    db_url: env.DB_URL ?? "",
  },
};

export default environments;
