import { Router } from "express";
import getArticleDao from "../dao/getArticleDao";

const articleRoutes = Router();

articleRoutes.get("/api/articles", async (req, res) => {
  try {
    const articles = await getArticleDao().findAll();

    res.set("Content-type", "application/json");
    res.send(articles || []);
  } catch (err) {
    console.error(err);
    res.send([]);
  }
});

articleRoutes.post("/api/articles", async (req, res) => {
  try {
    const articles = await getArticleDao().create(req.body);
    res.send(articles);
  } catch (err) {
    console.error(err);
    res.send("Error.");
  }
});

export default articleRoutes;
