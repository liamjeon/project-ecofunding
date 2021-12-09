import SQ from "sequelize";
import { sequelize } from "../schemas/database.js";
const DataTypes = SQ.DataTypes;

//Todo
  //Item model 연결 후 itemId, nickname 삭제
export default sequelize.define("item", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  nickname: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
});