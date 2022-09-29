import Comment from "../models/Comment";
import CommentDao from "./CommentDao";
import Dao from "../models/Dao";
import { getDb } from "../datasources/db";

const getCommentDao = (): Dao<number, Comment> => {
  const db = getDb();

  return new CommentDao(db);
};

export default getCommentDao;
