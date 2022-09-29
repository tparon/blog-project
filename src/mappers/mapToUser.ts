import UserRowDataPacket from "../models/UserRowDataPacket";
import User from "../models/User";

const mapToUser = (row: UserRowDataPacket): User => ({
  id: row.id,
  email: row.email,
});

export default mapToUser;
