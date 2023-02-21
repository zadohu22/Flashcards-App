import express from "express";
import { Register, Login, Logout } from "../controllers/Users.js";
import { AddSet } from "../controllers/AddSet.js";
import { verifyToken } from "../middleware/VerifyToken.js";
import { refreshToken } from "../controllers/RefreshToken.js";
import { GetCardSets } from "../models/GetCardSets.js";
import { AddCard } from "../controllers/AddCard.js";
import { GetAllCards } from "../models/GetAllCards.js";
import { UpdateCard } from "../controllers/UpdateCard.js";
import { DeleteCard } from "../controllers/DeleteCard.js";
const router = express.Router();

router.get("/users", verifyToken);
router.post("/users", Register);
router.post("/login", Login);
router.post("/addSet", AddSet);
router.post("/addCard", AddCard);
router.get("/getSets", GetCardSets);
router.get("/getAllCards", GetAllCards);
router.put("/updateCard", UpdateCard);
router.get("/token", refreshToken);
router.delete("/logout", Logout);
router.delete("/deleteCard", DeleteCard);

export default router;
