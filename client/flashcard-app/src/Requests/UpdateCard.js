import axios from "axios";

export const UpdateCard = async (
  setId,
  cardId,
  title,
  cardType,
  setMsg,
  definition,
  answerOne,
  oneCorrect,
  answerTwo,
  twoCorrect,
  answerThree,
  threeCorrect,
  answerFour,
  fourCorrect,
  selection
) => {
  // setNewcardGroupOverlay(false);

  const cardData = {
    cardId: cardId,
    title: title,
    cardType: cardType,
  };

  const DefinitionData = {
    title: title,
    definition: definition,
  };

  const ChoiceData = {
    title: title,
    answerOne: answerOne,
    oneCorrect: oneCorrect,
    answerTwo: answerTwo,
    twoCorrect: twoCorrect,
    answerThree: answerThree,
    threeCorrect: threeCorrect,
    answerFour: answerFour,
    fourCorrect: fourCorrect,
  };

  const BoolData = {
    title: title,
    selection: selection,
  };

  if (cardType === "Definition") {
    try {
      await axios
        .put("http://localhost:5000/updateCard", {
          cardData,
          DefinitionData,
        })
        .then((response) => console.log(response.data));
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  } else if (cardType === "Choice") {
    try {
      await axios
        .put("http://localhost:5000/updateCard", {
          cardData,
          ChoiceData,
        })
        .then((response) => console.log(response.data));
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  } else if (cardType === "Bool") {
    try {
      await axios
        .put("http://localhost:5000/updateCard", {
          cardData,
          BoolData,
        })
        .then((response) => console.log(response.data));
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  }
};
