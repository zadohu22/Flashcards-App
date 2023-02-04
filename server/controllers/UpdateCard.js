import {
  CardsModel,
  DefinitionCard,
  ChoiceCard,
  BoolCard,
} from "../models/CardsModel.js";
import { CardSetsModel } from "../models/CardSetsModel.js";

export const UpdateCard = async (req, res) => {
  const cardData = req.body.cardData;
  const definitionData = req.body.DefinitionData;
  const choiceData = req.body.ChoiceData;
  const boolData = req.body.BoolData;

  if (cardData.cardType === "Definition") {
    try {
      await CardsModel.update(
        {
          title: cardData.title,
          cardType: cardData.cardType,
          definition: definitionData.definition,
        },
        {
          where: { id: cardData.cardId },
        }
      );
      res.json({ msg: "Card Updated" });
    } catch (error) {
      console.log(error);
    }
  } else if (cardData.cardType === "Choice") {
    try {
      await CardsModel.update(
        {
          title: cardData.title,
          cardType: cardData.cardType,
          answerOne: choiceData.answerOne,
          oneCorrect: choiceData.oneCorrect,
          answerTwo: choiceData.answerTwo,
          twoCorrect: choiceData.twoCorrect,
          answerThree: choiceData.answerThree,
          threeCorrect: choiceData.threeCorrect,
          answerFour: choiceData.answerFour,
          fourCorrect: choiceData.fourCorrect,
        },
        {
          where: { id: cardData.cardId },
        }
      );
      res.json({ msg: "Card Updated" });
    } catch (error) {
      console.log(error);
    }
  } else if (cardData.cardType === "Bool") {
    try {
      await CardsModel.update(
        {
          title: cardData.title,
          cardType: cardData.cardType,
          selection: boolData.selection,
        },
        {
          where: { id: cardData.cardId },
        }
      );
      res.json({ msg: "Card Updated" });
    } catch (error) {
      console.log(error);
    }
  }

  console.log(cardData);
};
