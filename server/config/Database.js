import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const db = new Sequelize("flashcards_app", "root", process.env.SQL_PASSWORD, {
  host: "127.0.0.1",
  dialect: "mysql",
  port: "3306",
  _socket: "/var/run/mysqld/mysqld.sock",
});

export default db;
