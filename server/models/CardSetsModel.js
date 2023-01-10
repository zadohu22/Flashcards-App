import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Users from "./UserModel.js";

const { DataTypes } = Sequelize;

const CardSetsModel = db.define("sets", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  userId: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

const SetCurrentUser = async (req, res) => {
  const currentUser = await Users.findByPk(req.headers.userid);
  CardSetsModel.belongsTo(Users, {
    foreignKey: "userId",
    targetKey: "id",
  });
  Users.hasMany(CardSetsModel, { foreignKey: "userId", sourceKey: "id" });
  return currentUser;
};

export { CardSetsModel, SetCurrentUser };
