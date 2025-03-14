import mongoose from "mongoose";
import { Models } from "../models";

const tables = Models.map((item) => {
  const tableName = item.modelName;
  const tableSchema = item.schema;
  return {
    [tableName]:
      mongoose.models[tableName] || mongoose.model(tableName, tableSchema),
  };
});

export default tables;
