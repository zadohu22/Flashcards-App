import Users from "./UserModel.js";
import { SetCurrentUser, CardSetsModel } from "./CardSetsModel.js";

export const GetCardSets = async (req, res) => {
  try {
    const current = await SetCurrentUser(req, res);
    const user = await CardSetsModel.findAll({
      raw: true,
      where: {
        userId: current.id,
      },
      include: [
        {
          model: Users,
          attributes: ["id"],
        },
      ],
    }).then((sets) => {
      res.json(sets);
    });
  } catch (error) {
    console.log(error);
  }
};
