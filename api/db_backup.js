import mysql from "mysql"

export const db = mysql.createConnection({

    host:"HOST",
    user:"USER",
    password:"PASS",
    database:"DB_NAME"
});

