import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import db from "../dbConnection.js";
import { createError } from "../utils/error.js";
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

export const login = async (req, res, next) => {
  try {
    console.log("called");
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
          const token = jwt.sign({ name: req.body.name }, process.env.JWT, {
            expiresIn: "20s",
          });

          res
            .cookie("token", token, {
              httpOnly: true,
            })
            .status(200)
            .json(token);
          console.log();
        } else {
          return next(createError(400, "wrong info"));
        }
      }
    });
  } catch (error) {
    next(error);
  }
};
