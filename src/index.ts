import * as dotenv from "dotenv";
dotenv.config();

import express from "express";
import userRoutes from "./routes/userRoutes";
import bodyParser from "body-parser";
import commentRoutes from "./routes/commentRoutes";

const app = express();

app.use(bodyParser.json());
app.use(userRoutes);
app.use(commentRoutes);

app.listen(3000, () => {
  console.log("App is running on port 3000");
});
