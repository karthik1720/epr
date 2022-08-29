import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import db from "../dbConnection.js";
export const register = async (req, res, next) => {
  try {
    db.connect();
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

export const login = async (req, res, next) => {
  try {
    const { name, password } = req.body;
    const sql = `select name, password from auth where name = '${name}'`;
    db.query(sql, async (err, result) => {
      if (err) {
        console.log(err);
        next(err);
      }
      console.log(result[0]);
      if (!result[0]) {
        res.send("No user found");
      } else {
        console.log(result[0].password);
        console.log(password);
        const isCorrect = await bcrypt.compare(password, result[0].password);
        console.log(isCorrect);
        if (isCorrect) {
          res.send("logged in");
        } else {
          res.send("wrong info");
        }
      }
    });
  } catch {}
};
