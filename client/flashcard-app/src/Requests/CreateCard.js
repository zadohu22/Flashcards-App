import axios from "axios";

const CreateCard = async (
  setId,
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
    setId: setId,
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
        .post("http://localhost:5000/addCard", {
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
        .post("http://localhost:5000/addCard", {
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
        .post("http://localhost:5000/addCard", {
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

  // try {
  //   await axios
  //     .post("http://localhost:5000/addCard", {
  //       cardData,
  //       DefinitionData,
  //       ChoiceData,
  //       BooleanData,
  //     })
  //     .then((response) => {
  //       console.log(response.data);
  //     });
  // } catch (error) {
  //   if (error.response) {
  //     setMsg(error.response.data.msg);
  //   }
  // }
};

export default CreateCard;
