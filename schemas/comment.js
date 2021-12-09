import SQ from "sequelize";
import { sequelize } from "../schemas/database.js";
const DataTypes = SQ.DataTypes;

//Todo
  //Item model 연결 후 itemId, nickname 삭제
export default sequelize.define("comment", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  comment: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  nickname: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  rawDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  itemId: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },  
});