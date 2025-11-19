// require('dotenv').config({path})
import dotenv from "dotenv";

import connectToDatabase from "./db/index.js";
dotenv.config({
  path: "./env",
});
// import express from "express";
// const app = express();

// (async () => {
//   try {
//     await mongoose.connect(`process.env.MONGODB_URI}/${DB_NAME}`);
//     app.on("error", (error) => {
//       console.error("Express app error:", error);
//       throw error;
//     })
//     app.listen(process.env.PORT || 3000, () => {
//         console.log(`Server is running on port ${process.env.PORT || 3000}`);
//   } catch (error) {
//     console.error("Database connection error:", error);
//   }
// })();
