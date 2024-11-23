import environments from "@/helpers/configurations";

const server = environments.server;

const connectionUri = `mongodb://${server.db_username}:${server.db_pwd}@${server.db_server}:${server.db_port}/${server.db_name}`;

export default connectionUri;
