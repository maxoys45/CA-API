// export const config = {
//   // secrets: {
//   //   jwt: 'learneverything'
//   // },
//   port: 3045,
//   databaseUrl: 'mongodb://localhost:27017/mickoin',
// }

const dev = {
  DB_URL: "mongodb://localhost:27017/mickoin",
  PORT: 3045,
  JWT_SECRET: 'secretbeavers123',
},

// not sure what to set here
prod = {
  DB_URL: "mongodb://heroku_tql8f3mp:clmrkv2vboqqd9pkd3g32kmi6d@ds341825.mlab.com:41825/heroku_tql8f3mp"
}

module.exports = dev