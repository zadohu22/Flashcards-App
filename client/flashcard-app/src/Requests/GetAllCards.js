import axios from "axios";

export const getAllCards = async (setId, setAllCards, allCards) => {
  try {
    const getCards = await axios
      .get("http://localhost:5000/getAllCards", {
        headers: {
          setIdentity: `${setId}`,
        },
      })
      .then((cards) => {
        console.log(cards.data);
        console.log([...cards.data]);
        setAllCards(cards.data);
      });
  } catch (error) {
    console.log(error);
  }
};
