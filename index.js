import express from "express";
import config from "./server/config";

// const config = require("./server/config");

const app = config(express());
app.listen(app.get(`port`), () => {
  console.log(`Conected on port: http://localhost:${app.get("port")}/`);
});
