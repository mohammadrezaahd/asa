import tables from "../configs/tables";

const getTable = (tableName: string) => {
  const filteredTable = tables.filter((table) => {
    const name = Object.keys(table)[0];
    return tableName === name;
  });

  if (filteredTable.length >= 1) {
    return Object.values(filteredTable[0])[0];
  } else {
    throw new Error("Selected model not found");
  }
};

export default getTable;
