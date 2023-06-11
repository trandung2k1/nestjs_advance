import sql from 'mssql';
const sqlConfig = {
  user: process.env.USER,
  password: process.env.PASSWORD,
  server: process.env.HOST,
  options: {
    trustServerCertificate: true,
  },
};
export async function connectDB(): Promise<void> {
  sql
    .connect(sqlConfig)
    .then(async (c) => {
      const arrayObjectDatabase = await c.query(
        'SELECT name FROM master.sys.databases',
      );
      const arrayDB = arrayObjectDatabase.recordset.map((db) => db.name);
      if (arrayDB.includes(process.env.DATABASE)) {
        console.log('Database already exists');
      } else {
        await c.query(`CREATE DATABASE ${process.env.DATABASE}`);
        console.log('Created database successfully');
      }
    })
    .catch((e) => console.error(e));
}
