import CommentRowDataPacket from "../models/CommentRowDataPacket";
import Comment from "../models/Comment";

const mapToComment = (row: CommentRowDataPacket): Comment => ({
  id: row.id,
  body: row.body,
  author: row.author,
});

export default mapToComment;
