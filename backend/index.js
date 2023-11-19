import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { PORT, MONGO_DB_URL } from "./config.js";
import bookRoute from "./routes/bookRoute.js"; // Import the bookRoute

const app = express();

// Middleware for parsing request body
app.use(express.json());

// Middleware for handling CORS POLICY
app.use(cors());

app.get("/", (req, res) => {
  console.log(req);
  return res.send("<h1>Here is My mern stack Project, Welcome</h1>");
});

app.use("/Books", bookRoute);

mongoose
  .connect(MONGO_DB_URL)
  .then(() => {
    console.log("App successfully connected to DB");
    app.listen(PORT, () => {
      console.log(`App is listening to Port: http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
