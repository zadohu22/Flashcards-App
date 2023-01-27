import Users from "../models/UserModel.js";
import {
  CardsModel,
  DefinitionCard,
  ChoiceCard,
  BoolCard,
} from "../models/CardsModel.js";
import { CardSetsModel } from "../models/CardSetsModel.js";

export const AddCard = async (req, res) => {
  const cardData = req.body.cardData;
  console.log(req.body);
  try {
    await CardsModel.create({
      setId: cardData.setId,
      title: cardData.title,
      cardType: cardData.cardType,
    }).then(async (card) => {
      if (card.cardType === "Definition") {
        const definitionData = req.body.DefinitionData;
        await DefinitionCard.create({
          title: cardData.title,
          cardId: card.id,
          definition: definitionData.definition,
        });
      } else if (card.cardType === "Choice") {
        const choiceData = req.body.ChoiceData;
        await ChoiceCard.create({
          title: cardData.title,
          cardId: card.id,
          answerOne: choiceData.answerOne,
          oneCorrect: choiceData.oneCorrect,
          answerTwo: choiceData.answerTwo,
          twoCorrect: choiceData.twoCorrect,
          answerThree: choiceData.answerThree,
          threeCorrect: choiceData.threeCorrect,
          answerFour: choiceData.answerFour,
          fourCorrect: choiceData.fourCorrect,
        });
      } else if (card.cardType === "Bool") {
        const boolData = req.body.BoolData;
        console.log(boolData);
        console.log(selection);
        await BoolCard.create({
          title: cardData.title,
          cardId: card.id,
          selection: boolData.selection,
        });
      }
    });
    res.json({ msg: "New Card Added" });
  } catch (error) {
    console.log(error);
  }
};
