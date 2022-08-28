import express from "express";
import { register, regTable } from "../controllers/authController.js";
const router = express.Router();
import db from "../dbConnection.js";

router.post("/register", register);
router.post("/login");
router.get("/regtable", regTable);

router.get("/check", (req, res, next) => {
  db.query("select * from auth", (err, result) => {
    if (err) {
      throw err;
    }
    res.send(result);
  });
});

router.post("/create", (req, res, next) => {
  db.query("create table test (name varchar(25), id int)", (err, result) => {
    if (err) {
      throw err;
    }
    res.send("table created");
  });
});

router.post("/insert", (req, res, next) => {
  db.query('insert into test values ("karthik",18)', (err, result) => {
    if (err) throw err;

    res.send(result);
  });
});

export default router;
