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
  const definitionData = req.body.DefinitionData;
  const choiceData = req.body.ChoiceData;
  const boolData = req.body.BoolData;

  if (cardData.cardType === "Definition") {
    try {
      await CardsModel.create({
        setId: cardData.setId,
        title: cardData.title,
        cardType: cardData.cardType,
        definition: definitionData.definition,
      });
      res.json({ msg: "New Card Added" });
    } catch (error) {
      console.log(error);
    }
  } else if (cardData.cardType === "Choice") {
    try {
      await CardsModel.create({
        setId: cardData.setId,
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
      });
      res.json({ msg: "New Card Added" });
    } catch (error) {
      console.log(error);
    }
  } else if (cardData.cardType === "Bool") {
    try {
      await CardsModel.create({
        setId: cardData.setId,
        title: cardData.title,
        cardType: cardData.cardType,
        selection: boolData.selection,
      });
      res.json({ msg: "New Card Added" });
    } catch (error) {
      console.log(error);
    }
  }

  console.log(req.body);
  // try {
  //   await CardsModel.create({
  //     setId: cardData.setId,
  //     title: cardData.title,
  //     cardType: cardData.cardType,
  //     // cardId: cardData.id,
  //     definition: definitionData.definition,
  //     answerOne: choiceData.answerOne,
  //     oneCorrect: choiceData.oneCorrect,
  //     answerTwo: choiceData.answerTwo,
  //     twoCorrect: choiceData.twoCorrect,
  //     answerThree: choiceData.answerThree,
  //     threeCorrect: choiceData.threeCorrect,
  //     answerFour: choiceData.answerFour,
  //     fourCorrect: choiceData.fourCorrect,
  //     selection: boolData.selection,
  //   }).then(async (card) => {
  //     if (card.cardType === "Definition") {
  //       await DefinitionCard.create({
  //         title: cardData.title,
  //         cardId: card.id,
  //         definition: definitionData.definition,
  //       });
  //     } else if (card.cardType === "Choice") {
  //       await ChoiceCard.create({
  //         title: cardData.title,
  //         cardId: card.id,
  //         answerOne: choiceData.answerOne,
  //         oneCorrect: choiceData.oneCorrect,
  //         answerTwo: choiceData.answerTwo,
  //         twoCorrect: choiceData.twoCorrect,
  //         answerThree: choiceData.answerThree,
  //         threeCorrect: choiceData.threeCorrect,
  //         answerFour: choiceData.answerFour,
  //         fourCorrect: choiceData.fourCorrect,
  //       });
  //     } else if (card.cardType === "Bool") {
  //       console.log(boolData);
  //       // console.log(selection);
  //       await BoolCard.create({
  //         title: cardData.title,
  //         cardId: card.id,
  //         selection: boolData.selection,
  //       });
  //     }
  //   });
  //   res.json({ msg: "New Card Added" });
  // } catch (error) {
  //   console.log(error);
  // }
};
