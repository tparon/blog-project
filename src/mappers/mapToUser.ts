import User from "../models/User";
import UserRowDataPacket from "../models/UserRowDataPacket";

const mapToUser = (row: UserRowDataPacket): User => ({
  id: row.id,
  email: row.email,
});

export default mapToUser;
