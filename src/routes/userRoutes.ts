import { Router } from "express";
import getUserDao from "../dao/getUserDao";

const userRoutes = Router();

userRoutes.get("/api/users", async (req, res) => {
  try {
    const users = await getUserDao().findAll();

    res.set("Content-type", "application/json");
    res.send(users || []);
  } catch (err) {
    console.error(err);
    res.send([]);
  }
});

userRoutes.post("/api/users", async (req, res) => {
  try {
    const users = await getUserDao().create(req.body);
    res.send(users);
  } catch (err) {
    console.error(err);
    res.send("Error.");
  }
});

export default userRoutes;
