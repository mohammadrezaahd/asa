import mongoose from "mongoose";
import { Models } from "../models";

const tables = Models.map((item) => {
  const tableName = item.title;
  const tableSchema = item.schema;
  return mongoose.models?.tableName || mongoose.model(tableName, tableSchema);
});

export default tables;
