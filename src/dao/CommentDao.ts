import Comment from "../models/Comment";
import CommentRowDataPacket from "../models/CommentRowDataPacket";
import mapToComment from "../mappers/mapToComment";
import { OkPacket } from "mysql2";
import { DbPool } from "../datasources/db";
import Dao from "../models/Dao";

class CommentDao implements Dao<number, Comment> {
  constructor(private db: DbPool) {}

  async findAll() {
    const [rows] = await this.db.query<CommentRowDataPacket[]>(
      "SELECT * FROM comments"
    );

    return rows.map(mapToComment);
  }

  async create(comments: Comment) {
    const [result] = await this.db.execute<OkPacket>(
      "INSERT INTO comments(id, body, author) VALUES (?, ?, ?)",
      [comments.id, comments.body, comments.author]
    );

    return {
      ...comments,
      id: result.insertId,
    };
  }

  async remove(id: number) {
    await this.db.execute<OkPacket>("DELETE FROM comments WHERE id = ?", [id]);
  }
}

export default CommentDao;
