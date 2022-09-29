import User from "../models/User";
import UserRowDataPacket from "../models/UserRowDataPacket";
import mapToUser from "../mappers/mapToUser";
import { OkPacket } from "mysql2";
import { DbPool } from "../datasources/db";
import Dao from "../models/Dao";

class UserDao implements Dao<number, User> {
  constructor(private db: DbPool) {}

  async findAll() {
    const [rows] = await this.db.query<UserRowDataPacket[]>(
      "SELECT * FROM users"
    );

    return rows.map(mapToUser);
  }

  async create(users: User) {
    const [result] = await this.db.execute<OkPacket>(
      "INSERT INTO users(id, email) VALUES (?, ?)",
      [users.id, users.email]
    );

    console.log(result);

    return {
      ...users,
      id: result.insertId,
    };
  }

  async remove(id: number) {
    await this.db.execute<OkPacket>("DELETE FROM users WHERE id = ?", [id]);
  }
}

export default UserDao;
