import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import db from "../dbConnection.js";
export const register = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    const regSql = `insert into auth values ('${name}','${email}','${hash}')`;
    db.query(regSql, (err, result) => {
      if (err) console.log(err);
      res.send(result);
    });
  } catch (error) {
    next(error);
  }
};

export const regTable = async (req, res, next) => {
  try {
    db.query(
      "create table auth (name varchar(25), email varchar(50), password varchar(255))"
    );
    res.status(200).send("auth table created");
  } catch (err) {
    console.log(err);
  }
};
