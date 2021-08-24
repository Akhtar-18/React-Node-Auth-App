/*module.exports = {
    HOST: "localhost",
    PORT: 27017,
    DB: "akhtar_db"
  }; */
  require('dotenv').config()
  module.exports = {
    DB_URL: process.env.DB_URL,
    JWT_SECRET: process.env.JWT_SECRET,
    PORT: process.env.APP_PORT
}