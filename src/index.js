//require("dotenv").config({ path: "./env" });   inconsistent code line , so how to resolve this

import dotenv from "dotenv";

import { connectDB } from "./db/db.js";
import { app } from "./app.js";
dotenv.config({ path: "./.env" });

connectDB()
  .then(
    app.listen(process.env.PORT || 8000, () => {
      console.log(`server is running at : ${process.env.PORT}`);
    })
  )
  .catch((err) => {
    console.log("MONGODB connetion failed !!! ", err);
  });
/*
import express from "express";

const app = express(
  //IIFE
  async () => {
    try {
      await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
      app.on("error", (error) => {
        console.log("ERROR : ", error);
        throw error;
      });

      app.listen(process.env.PORT, () => {
        `server is running at ${process.env.PORT}`;
      });
    } catch (error) {
      console.error("ERROR : ", error);
      throw err;
    }
  }
)();
*/
