import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import appRoutes from "./routes/auth.js";
dotenv.config();
const app = express();
const port = process.env.PORT;
app.use(cookieParser());
app.use(express.json());
app.use("/api", appRoutes);


app.listen(port, () => {
  console.log("Server listening to port " + port);
});
//-----------------------------------------------

//MYSQL connect
