"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
app.get("/", (req, res) => {
    res.send("<h1>Hello, Node.js</h1>");
});
app.get("/hello", (req, res) => {
    res.send("<h1>안녕하세요, 홍길동님</h1>");
});
app.get("/music", (req, res) => {
    const title = req.query.title;
    const singer = req.query.singer;
    res.send("[GET] query string -> title:" + title + ", singer:" + singer);
});
app.get("/music/:title/:singer", (req, res) => {
    const title = req.params.title;
    const singer = req.params.singer;
    res.send("[GET] rest api -> title:" + title + ", singer:" + singer);
});
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.post("/music", (req, res) => {
    console.log("req.body:", req.body);
    const title = req.body.title;
    const singer = req.body.singer;
    res.send("[POST] form data -> title:" + title + ", singer:" + singer);
});
app.post("/music/:title/:singer", (req, res) => {
    console.log("req.params:", req.params);
    const title = req.params.title;
    const singer = req.params.singer;
    res.send("[POST] rest api -> title:" + title + ", singer:" + singer);
});
