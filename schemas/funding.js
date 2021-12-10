import SQ from "sequelize";
import { sequelize } from "../schemas/database.js";
const DataTypes = SQ.DataTypes;

//Todo
//Item model 연결 후 itemId, nickname 삭제
export default sequelize.define("funding", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  title: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  thumbnail: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  //0원이 될 수 없도록 만들어야됨
  targetPrice: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  totalPrice: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
    allowNull: false,
  },
  content: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  percent: {
    type: DataTypes.FLOAT(10, 7),
    defaultValue: 0,
    allowNull: false,
  },
  rawDate: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    allowNull: false,
  },
});
