import User from "../models/User";
import UserDao from "./UserDao";
import Dao from "../models/Dao";
import { getDb } from "../datasources/db";

const getUserDao = (): Dao<number, User> => {
  const db = getDb();

  return new UserDao(db);
};

export default getUserDao;
