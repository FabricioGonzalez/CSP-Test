const config = {
  database: 'test',
  username: 'docker',
  password: 'docker',
  /*     host: 'mysqldb', */
  port: 3306,
  dialect: 'mysql',
  define: {
    timestamps: true,
    underscored: true,
  },
};
module.exports = config;
