import { Connection } from 'typeorm'

export const dropAllTables = async (connection: Connection) => {
  connection.entityMetadatas.forEach(
    async entityMetadata => await connection.query(`DROP TABLE ${entityMetadata.tableName}`),
  )
}

export const dropAllTablesAndCloseConnection = async (connection: Connection) => {
  await dropAllTables(connection)
  await connection.close()
}
