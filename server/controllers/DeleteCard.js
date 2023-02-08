import { CardsModel } from "../models/CardsModel.js";

export const DeleteCard = async (req, res) => {
  console.log(req.body);
  try {
    const deleted = await CardsModel.destroy({
      where: {
        id: req.body.cardId,
      },
    });
    res.json({ msg: "Card Deleted" });
    console.log("backend resolved");
    return Promise.resolve();
  } catch (error) {
    console.log(error);
    return console.log(false);
  }
};
