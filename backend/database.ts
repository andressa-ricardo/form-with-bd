import mysql2 from "mysql2";
import dotenv from "dotenv"

dotenv.config()

const connection = mysql2.createConnection({
  host: "127.0.0.1",
  user: "root",
  database: "meubanco",
  password: process.env.PASSWORD,
});

export function query(query: string) {
  return new Promise((resolve, reject) => {
    connection.query(query, function (err, results) {
      if (err) {
        return reject(err);
      } else {
        resolve(results);
      }
    });
  });
}
