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

// const currentUser = async (req, res) => {
//   await Users.findAll({
//     where: {
//       id: req.body.id,
//     },
//   });
// };

// const currentUser = await Users.findByPk(req.body.id);

const currentUser = async (req, res) => {
  await Users.findByPk(req.body.id);
  console.log(req.body.id);
  CardSetsModel.belongsTo(currentUser, {
    foreignKey: "userId",
    targetKey: "id",
  });
  currentUser.hasMany(CardSetsModel, { foreignKey: "userId", sourceKey: "id" });
};

// CardSetsModel.belongsTo(Users, {
//   foreignKey: "userId",
//   targetKey: "id",
// });
// Users.hasMany(CardSetsModel, { foreignKey: "userId", sourceKey: "id" });

// (async () => {
//   await db.sync();
// })();

export default CardSetsModel;
