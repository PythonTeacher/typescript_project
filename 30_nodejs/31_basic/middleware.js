"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const morgan = require("morgan");
const app = express();
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
const mw1 = (req, res, next) => {
    console.log("첫번째 미들웨어");
    next();
};
const mw2 = (req, res, next) => {
    console.log("두번째 미들웨어");
    next();
};
app.use(mw1);
app.use(mw2);
const myLogger = (req, res, next) => {
    console.log(`${req.method}, ${req.url}, ${new Date().toLocaleString()}`);
    next();
};
app.use(myLogger);
app.use(morgan("dev"));
app.use('/music', (req, res, next) => {
    console.log("/music의 모든 요청 처리");
    next();
});
app.get("/music", (req, res, next) => {
    console.log("/music의 GET 요청 처리");
    next();
});
app.use(express.static("public"));
app.use((req, res, next) => {
    res.status(404).send("없는 페이지입니다.");
});
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Internal Server Error");
});
