import express from "express";
import { login, register } from "../controllers/authController.js";
import { vcAdd, vcView } from "../controllers/vcController.js";
import { verifyToken } from "../utils/verifyToken.js";
const router = express.Router();
import db from "../dbConnection.js";

router.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

router.post("/register", register);
router.post("/login", login);
router.post("/vcform", vcAdd);
router.get("/vcview", vcView);

router.get("/welcome", verifyToken, (req, res) => {
  res.send("Authenticated");
});

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
