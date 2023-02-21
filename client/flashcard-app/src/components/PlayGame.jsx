import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import FlashcardBool from "./Flashcard-Types/FlashcardBool";
import FlashcardChoice from "./Flashcard-Types/FlashcardChoice";
import FlashcardDefinition from "./Flashcard-Types/FlashcardDefinition";
import ReactTypingEffect from "react-typing-effect";

const PlayGame = ({ card }) => {
  const { state } = useLocation();
  const cardsList = state.allCards;
  const [remainingCards, setRemainingCards] = useState(cardsList);
  const [currentCard, setCurrentCard] = useState(null);
  const [answerChecked, setAnswerChecked] = useState({
    oneCorrect: 0,
    twoCorrect: 0,
    threeCorrect: 0,
    fourCorrect: 0,
  });
  const [correctAnswerPicked, setCorrectAnswerPicked] = useState(false);
  const [checkAnswerClicked, setCheckAnswerClicked] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const [boolChecked, setBoolChecked] = useState({
    selection: 0,
  });
  const [correctBoolPicked, setCorrectBoolPicked] = useState(false);
  const [boolCheckAnswerClicked, setBoolCheckAnswerClicked] = useState(false);
  const [boolSelectedOption, setBoolSelectedOption] = useState(null);

  const [playAgain, setPlayAgain] = useState(false);
  const [welcome, setWelcome] = useState(false);

  useEffect(() => {
    setWelcome(true);
    displayCard();

    setRemainingCards(cardsList);
    console.log(
      "from page load useeffect => remainingCards",
      remainingCards,
      "cardsList",
      cardsList,
      "current card",
      currentCard
    );
  }, []);

  useEffect(() => {
    setSelectedOption(null);
    setBoolSelectedOption(null);
  }, [remainingCards]);

  useEffect(() => {
    if (remainingCards.length === cardsList.length) {
      setRemainingCards(cardsList);
      displayCard();
    }
  }, [remainingCards, cardsList.length]);

  const handleIsAnswerCorrect = () => {
    const commonKeys = new Set(
      Object.keys(currentCard).filter((key) =>
        answerChecked.hasOwnProperty(key)
      )
    );
    console.log(commonKeys);
    console.log(answerChecked.oneCorrect);
    let isCorrect = true;
    Array.from(commonKeys).forEach((key) => {
      if (currentCard[key] !== answerChecked[key]) {
        isCorrect = false;
      }
    });
    return isCorrect;
  };

  const handleIsBoolCorrect = () => {
    const commonKeys = new Set(
      Object.keys(currentCard).filter((key) => boolChecked.hasOwnProperty(key))
    );
    console.log(commonKeys, "common keys line 73 handleisboolcorrect");

    let isCorrect = true;
    Array.from(commonKeys).forEach((key) => {
      if (currentCard[key] !== boolChecked[key]) {
        isCorrect = false;
      }
    });
    return isCorrect;
  };

  const handleQuestionSubmit = async () => {
    setWelcome(false);
    console.log(currentCard);
    if (currentCard.cardType === "Choice") {
      if (handleIsAnswerCorrect() === true) {
        setCheckAnswerClicked(false);
        const timer = new Promise((resolve, reject) =>
          setTimeout(() => {
            setCorrectAnswerPicked(true);
            resolve();
          }, 1500)
        );
        setCorrectAnswerPicked(true);
        Promise.all([timer]).then(() => {
          displayCard();
          setCorrectAnswerPicked(false);
        });

        //   displayCard();
        console.log("answer is correct");
        console.log("remainingCards", remainingCards, "cardsList", cardsList);
      } else {
        setCheckAnswerClicked(false);
        setTimeout(() => setCheckAnswerClicked(true), 50);
      }
    } else if (currentCard.cardType === "Bool") {
      if (handleIsBoolCorrect() === true) {
        setBoolCheckAnswerClicked(false);
        const timer = new Promise((resolve, reject) =>
          setTimeout(() => {
            setCorrectBoolPicked(true);
            resolve();
          }, 1500)
        );
        setCorrectBoolPicked(true);
        Promise.all([timer]).then(() => {
          displayCard();
          setCorrectBoolPicked(false);
        });

        //   displayCard();
        console.log("answer is correct");
        console.log("remainingCards", remainingCards, "cardsList", cardsList);
      } else {
        setBoolCheckAnswerClicked(false);
        setTimeout(() => setBoolCheckAnswerClicked(true), 50);
      }
    }
  };

  const displayCard = () => {
    if (remainingCards.length === 0) {
      console.log("All cards have been displayed");
      setPlayAgain(true);
      return;
    } else setPlayAgain(false);

    const randomIndex = Math.floor(Math.random() * remainingCards.length);
    const newCard = remainingCards[randomIndex];
    setCurrentCard(newCard);

    setRemainingCards((prevCards) => {
      return prevCards.filter((_, i) => i !== randomIndex);
    });
  };

  const handleNextCard = () => {
    displayCard();
    setWelcome(false);
  };

  const resetCards = () => {
    setRemainingCards(cardsList);
    setWelcome(true);

    displayCard();
    console.log(
      "from resetCards => cardsList",
      cardsList,
      "remainingCards",
      remainingCards
    );
  };

  return (
    <>
      <div className='w-full h-full flex flex-col justify-center items-center absolute gap-4'>
        <div className='h-40px relative bottom-10'>
          {welcome && (
            <ReactTypingEffect
              className='text-2xl select-none'
              text={"Good luck!"}
              eraseDelay={1000000000}
              cursor={<p></p>}
              cursorClassName={"hidden"}
              eraseSpeed={20}
              typingDelay={50}
              speed={20}
            />
          )}
        </div>
        <div className='h-40px relative bottom-10'>
          {playAgain && (
            <ReactTypingEffect
              className='text-2xl'
              text={"That's all the cards!"}
              eraseDelay={1000000000}
              cursor={<p></p>}
              cursorClassName={"hidden"}
              eraseSpeed={20}
              typingDelay={50}
              speed={20}
            />
          )}
        </div>
        <div className='h-[20px] relative top-[40px]'>
          {(correctAnswerPicked || correctBoolPicked) && (
            <ReactTypingEffect
              className='text-xl text-success'
              text={"Correct!"}
              typingDelay={0}
              speed={20}
              eraseDelay={10000000}
              eraseSpeed={20}
            />
          )}
        </div>

        <div className='h-[20px] relative'>
          {(checkAnswerClicked || boolCheckAnswerClicked) && (
            <ReactTypingEffect
              className='text-xl text-error'
              text={"Wrong answer, try again!"}
              typingDelay={0}
              speed={20}
              eraseDelay={10000000}
              eraseSpeed={20}
            />
          )}
        </div>
        {currentCard ? (
          currentCard.cardType === "Definition" ? (
            <FlashcardDefinition currentCard={currentCard} />
          ) : currentCard.cardType === "Choice" ? (
            <FlashcardChoice
              currentCard={currentCard}
              setAnswerChecked={setAnswerChecked}
              setSelectedOption={setSelectedOption}
              selectedOption={selectedOption}
            />
          ) : currentCard.cardType === "Bool" ? (
            <FlashcardBool
              currentCard={currentCard}
              setBoolChecked={setBoolChecked}
              setBoolSelectedOption={setBoolSelectedOption}
              boolSelectedOption={boolSelectedOption}
            />
          ) : (
            <p>No card to display</p>
          )
        ) : null}

        {/* {playAgain === false ? (
          <button onClick={handleQuestionSubmit}>Check answer</button>
        ) : (
          <button onClick={resetCards}>Play Again</button>
        )} */}
        {currentCard ? (
          playAgain === true ? (
            <button className='mb-20' onClick={resetCards}>
              Play Again
            </button>
          ) : currentCard.cardType === "Definition" ? (
            <button className='mb-20' onClick={handleNextCard}>
              Next Card
            </button>
          ) : (
            <button className='mb-20' onClick={handleQuestionSubmit}>
              Check answer
            </button>
          )
        ) : null}
      </div>
    </>
  );
};

export default PlayGame;
