import environments from "@/helpers/configurations";
import sql from "mssql";

const serverConfig = environments.server;
const config: sql.config = {
  server: serverConfig.name ?? "",
  database: serverConfig.db,
  user: serverConfig.user,
  password: serverConfig.password,
  options: {
    encrypt: true,
    trustServerCertificate: true,
  },
};

export async function getDatabaseConnection() {
  try {
    const pool = await sql.connect(config);
    console.log("Connected to database");
    return pool;
  } catch (err) {
    console.error("Error connecting to database", err);
    throw err;
  }
}
