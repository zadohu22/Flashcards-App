import { Sequelize } from "sequelize";
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
  title: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  definition: {
    type: Sequelize.TEXT,
  },
});

const ChoiceCard = db.define("ChoiceCard", {
  title: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  answerOne: {
    type: Sequelize.TEXT,
  },

  oneCorrect: {
    type: Sequelize.BOOLEAN,
  },

  answerTwo: {
    type: Sequelize.TEXT,
  },

  twoCorrect: {
    type: Sequelize.BOOLEAN,
  },

  answerThree: {
    type: Sequelize.TEXT,
  },

  threeCorrect: {
    type: Sequelize.BOOLEAN,
  },

  answerFour: {
    type: Sequelize.TEXT,
  },

  fourCorrect: {
    type: Sequelize.BOOLEAN,
  },
});

const BoolCard = db.define("BoolCard", {
  title: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  selection: {
    type: Sequelize.BOOLEAN,
  },
});

CardsModel.hasOne(DefinitionCard, { foreignKey: "cardId" });
CardsModel.hasOne(ChoiceCard, { foreignKey: "cardId" });
CardsModel.hasOne(BoolCard, { foreignKey: "cardId" });

export { CardsModel, DefinitionCard, ChoiceCard, BoolCard };
