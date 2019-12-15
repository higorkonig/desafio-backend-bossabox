module.exports = {
  dialect: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '',
  database: 'vuttr',
  define: {
      timestamps: true,
      underscored: true,
      underscoredAll: true,
  },
}
// module.exports = {
// 	dialect: 'postgres',
// 	host: 'localhost',
// 	port: 5433,
// 	username: 'postgres',
// 	password: '33244891',
// 	database: 'VUTTR',
// 	define: {
// 		timestamps: true,
// 		underscored: true,
// 		underscoredAll: true
// 	}
// };
