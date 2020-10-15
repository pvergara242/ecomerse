import express from 'express'
// import config from './server/config'

const config = require("./server/config");


// const express = require("express");

const app = config(express());

app.listen(app.get(`port`), () => {
  console.log(`Conected on port: ${app.get("port")} `);
});
