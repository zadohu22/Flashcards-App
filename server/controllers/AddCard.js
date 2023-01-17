import Users from "../models/UserModel.js";
import {
  CardsModel,
  DefinitionCard,
  ChoiceCard,
  BooleanCard,
} from "../models/CardsModel.js";
import { CardSetsModel } from "../models/CardSetsModel.js";

export const AddCard = async (req, res) => {
  // const { setId, title, cardType } = req.body;
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
          cardId: card.id,
          definition: definitionData.definition,
        });
      } else if (card.cardType === "Choice") {
        const choiceData = req.body.ChoiceData;
        await ChoiceCard.create({
          cardId: card.id,
          answerOne: choiceData.answerOne,
          answerTwo: choiceData.answerTwo,
          answerThree: choiceData.answerThree,
          answerFour: choiceData.answerFour,
          correctAnswer: choiceData.correctAnswer,
        });
      } else {
        await BooleanCard.create({
          cardId: card.id,
          isTrue: req.body.isTrue,
          isFalse: req.body.isFalse,
        });
      }
    });
    res.json({ msg: "New Card Added" });
  } catch (error) {
    console.log(error);
  }
};
