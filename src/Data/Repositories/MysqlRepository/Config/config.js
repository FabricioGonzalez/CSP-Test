require('dotenv').config();
const config = {
  database: process.env.MYSQL_DATABASE,
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_ROOT_PASSWORD,
  host: process.env.DATABASE_HOST || 'localhost',
  port: process.env.MYSQL_LOCAL_PORT || 3306,
  dialect: 'mysql',
  define: {
    timestamps: true,
    underscored: true,
  },
};
module.exports = config;
