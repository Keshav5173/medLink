import express from "express";
import "dotenv/config";
import userRouter from "./routes/user.router.js"
import indexRouter from "./routes/index.routes.js";
import cookieParser from "cookie-parser";
import {connection}  from "./config/db.js";

const app = express();

import cors from 'cors';
app.use(cors({
    origin: 'http://localhost:3000', // React dev server
    credentials: true // if using cookies for auth
}));


app.set("view engine", 'ejs');
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use("/user", userRouter);
app.use("/", indexRouter);
app.use(cookieParser());

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is live at http://localhost:${port}`);
});
