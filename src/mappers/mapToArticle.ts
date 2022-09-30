import Article from "../models/Article";
import ArticleRowDataPacket from "../models/ArticleRowDataPacket";

const mapToArticle = (row: ArticleRowDataPacket): Article => ({
  id: row.id,
  title: row.title,
  body: row.body,
  createdAt: row.createdAt,
  author: row.author,
});

export default mapToArticle;
