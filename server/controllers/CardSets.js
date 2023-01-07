import CardSetsModel from "../models/CardSetsModel.js";

export const AddSet = async (req, res) => {
  const { name, userId } = req.body;
  try {
    await CardSetsModel.create({
      name: name,
      userId: userId,
    });
    res.json({ msg: "Card set added" });
  } catch (error) {
    console.log(error);
  }
};
