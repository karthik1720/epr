import db from "../dbConnection.js";

export const vcAdd = (req, res, next) => {
  try {
    db.connect();
    const { dept, lpar, env, requestor, tor, des } = req.body;
    const sql = `insert into vc values ('${dept}','${lpar}','${env}','${requestor}','${tor}','${des}')`;
    db.query(sql, (err, result) => {
      if (err) return res.json(err);
      res.send(result);
    });
  } catch {}
};

export const vcView = (req, res, next) => {
  try {
    console.log("called");
    db.connect();
    db.query("select * from vc", (err, result) => {
      if (err) return res.json(err);
      res.json(result);
    });
  } catch {}
};
