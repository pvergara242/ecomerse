const express = require("express");
const config = require("./server/config");

const app = config(express());

app.listen(app.get(`port`), () => {
  console.log(`Saludo para jos in the por port: ${app.get("port")} las nalgas`);
});

