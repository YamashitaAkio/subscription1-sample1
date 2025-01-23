var sql = require('mssql');

class Database {
  config = {};
  poolconnection = null;
  connected = false;

  static async getInstance(config) {
    if (database == null) {
      database = new Database(config);
    }
    if (!database.connected) {
      await database.connect();
    }
    return database;
  }

  constructor(config) {
    this.config = config;
  }

  async connect(config) {
    try {
      this.poolconnection = await sql.connect(this.config);
      this.connected = true;
      console.log('Database connected successfully.');
      return this.poolconnection;
    } catch (error) {
      console.error('Error connecting to the database:', error);
      this.connected = false;
    }
  }

  async disconnect() {
    try {
      if (this.connected) {
        await this.poolconnection.close();
        this.connected = false;
        console.log('Database disconnected successfully.');
      }
    } catch (error) {
      console.error('Error disconnecting from the database:', error);
    }
  }

  async query(query) {
    const request = this.poolconnection.request();
    const result = await request.query(query);

    return result.recordsets[0];
  }

  async execute(query) {
    const request = this.poolconnection.request();
    const result = await request.query(query);

    return result.rowsAffected[0];
  }
}

var database = null;

module.exports = Database;
