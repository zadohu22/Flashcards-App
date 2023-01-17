import axios from "axios";

const CreateCard = async (
  setId,
  title,
  cardType,
  setMsg,
  definition,
  answerOne,
  answerTwo,
  answerThree,
  answerFour,
  correctAnswer,
  isTrue,
  isFalse
) => {
  // setNewcardGroupOverlay(false);

  const cardData = {
    setId: setId,
    title: title,
    cardType: cardType,
  };

  const DefinitionData = {
    definition: definition,
  };

  const ChoiceData = {
    answerOne: answerOne,
    answerTwo: answerTwo,
    answerThree: answerThree,
    answerFour: answerFour,
    correctAnswer: correctAnswer,
  };

  const BooleanData = {
    isTrue: isTrue,
    isFalse: isFalse,
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
  } else {
    try {
      await axios
        .post("http://localhost:5000/addCard", {
          cardData,
          BooleanData,
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
