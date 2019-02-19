// export const config = {
//   // secrets: {
//   //   jwt: 'learneverything'
//   // },
//   port: 3045,
//   databaseUrl: 'mongodb://localhost:27017/mickoin',
// }

const dev = {
  DB_URL: "mongodb://localhost:27017/mickoin",
  PORT: 3045
},

// not sure what to set here
prod = {
  DB_URL: "mongodb://ds341605.mlab.com:41605/mickoin",
  PORT: 3045
}

module.exports = prod;