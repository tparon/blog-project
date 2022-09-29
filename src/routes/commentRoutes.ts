import { Router } from "express";
import getCommentDao from "../dao/getCommentDao";

const commentRoutes = Router();

commentRoutes.get("/api/comments", async (req, res) => {
  try {
    const comments = await getCommentDao().findAll();

    res.set("Content-type", "application/json");
    res.send(comments || []);
  } catch (err) {
    console.error(err);
    res.send([]);
  }
});

commentRoutes.post("/api/comments", async (req, res) => {
  try {
    const comments = await getCommentDao().create(req.body);
    res.send(comments);
  } catch (err) {
    console.error(err);
    res.send("Error.");
  }
});

export default commentRoutes;
