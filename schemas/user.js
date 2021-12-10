import SQ from "sequelize";
import { sequelize } from "../schemas/database.js";
const DataTypes = SQ.DataTypes;

//Todo
//Item model 연결 후 itemId, nickname 삭제
export default sequelize.define("user", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  nickname: {
    type: DataTypes.TEXT,
  },
});
