import Dao from "../models/Dao";
import ArticleDao from "./ArticleDao";
import { getDb } from "../datasources/db";
import Article from "../models/Article";

const getArticleDao = (): Dao<number, Article> => {
  const db = getDb();

  return new ArticleDao(db);
};

export default getArticleDao;
