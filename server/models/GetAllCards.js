import { CardsModel } from "./CardsModel.js";
import { CardSetsModel } from "./CardSetsModel.js";

export const GetAllCards = async (req, res) => {
  try {
    const currentSet = await CardSetsModel.findAll({
      raw: true,
      where: {
        id: req.headers.setidentity,
      },
    });

    const allCards = await CardsModel.findAll({
      raw: true,
      where: {
        setId: req.headers.setidentity,
      },
      include: [
        {
          model: CardSetsModel,
          attributes: ["id"],
        },
      ],
    }).then((sets) => {
      res.json(sets);
    });
  } catch (error) {
    console.log(error);
    console.log("line 29", req.headers);
  }
};
