import environments from "@/helpers/configurations";

const server = environments.server;

const isProduction = process.env.NODE_ENV === "production";

const connectionUri = isProduction
  ? `"mongodb+srv://mhmdrzvhd:<db_password>@main.edewq.mongodb.net/?retryWrites=true&w=majority&appName=main"`
  : `mongodb://${server.db_server}:${server.db_port}/${server.db_name}`;

export default connectionUri;
