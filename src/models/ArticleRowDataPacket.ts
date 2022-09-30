import { RowDataPacket } from "mysql2";
import Article from "./Article";

type ArticleRowDataPacket = Article & RowDataPacket;

export default ArticleRowDataPacket;
