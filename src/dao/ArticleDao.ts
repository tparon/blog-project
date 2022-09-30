import { OkPacket } from "mysql2";
import { DbPool } from "../datasources/db";
import Dao from "../models/Dao";
import ArticleRowDataPacket from "../models/ArticleRowDataPacket";
import mapToArticle from "../mappers/mapToArticle";
import Article from "../models/Article";

class ArticlesDao implements Dao<number, Article> {
  constructor(private db: DbPool) {}

  async findAll() {
    const [rows] = await this.db.query<ArticleRowDataPacket[]>(
      "SELECT * FROM articles"
    );

    return rows.map(mapToArticle);
  }

  async create(articles: Article) {
    const [result] = await this.db.execute<OkPacket>(
      "INSERT INTO articles(id, title, body, createdAt, author) VALUES (?, ?, ?, ?, ?)",
      [
        articles.id,
        articles.title,
        articles.body,
        articles.createdAt,
        articles.author,
      ]
    );

    return {
      ...articles,
      id: result.insertId,
    };
  }

  async remove(id: number) {
    await this.db.execute<OkPacket>("DELETE FROM articles WHERE id = ?", [id]);
  }
}

export default ArticlesDao;
