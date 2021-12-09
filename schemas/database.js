import { config } from "../configuration/config.js";
import SQ from "sequelize";

const { host, user, database, password } = config.db;
export const sequelize = new SQ.Sequelize(database, user, password,{
    host,
    dialect: 'mysql', //defulat
});
