import { BOOLEAN, Sequelize } from "sequelize";
import db from "../config/Database.js";
import Users from "./UserModel.js";
import { CardSetsModel } from "./CardSetsModel.js";

const { DataTypes } = Sequelize;

const CardsModel = db.define("cards", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  setId: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  title: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  cardType: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
});

CardsModel.belongsTo(CardSetsModel, {
  foreignKey: "setId",
  targetKey: "id",
});
CardSetsModel.hasMany(CardsModel, { foreignKey: "setId", sourceKey: "id" });

const DefinitionCard = db.define("DefinitionCard", {
  definition: {
    type: Sequelize.TEXT,
  },
});

const ChoiceCard = db.define("ChoiceCard", {
  answerOne: {
    type: Sequelize.TEXT,
  },
  answerTwo: {
    type: Sequelize.TEXT,
  },
  answerThree: {
    type: Sequelize.TEXT,
  },
  answerFour: {
    type: Sequelize.TEXT,
  },
  correctAnswer: {
    type: Sequelize.BOOLEAN,
  },
});

const BooleanCard = db.define("BooleanCard", {
  isTrue: {
    type: Sequelize.BOOLEAN,
  },
  isFalse: {
    type: Sequelize.BOOLEAN,
  },
});

CardsModel.hasOne(DefinitionCard, { foreignKey: "cardId" });
CardsModel.hasOne(ChoiceCard, { foreignKey: "cardId" });
CardsModel.hasOne(BooleanCard, { foreignKey: "cardId" });

export { CardsModel, DefinitionCard, ChoiceCard, BooleanCard };
