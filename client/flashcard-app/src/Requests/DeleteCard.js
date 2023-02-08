import axios from "axios";
import { getAllCards } from "./GetAllCards";

export const DeleteCard = async (cardId, setMsg) => {
  console.log("from delete request", cardId);
  try {
    await axios({
      method: "delete",
      url: "http://localhost:5000/deleteCard",
      data: {
        cardId: cardId,
      },
    });
    console.log("deletecard resolved");
    return Promise.resolve();
  } catch (error) {
    console.log("deletecard error", error);
    if (error.response) {
      setMsg(error.response.data.msg);
    }
    return Promise.reject(error);
  }
};
