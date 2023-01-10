import express from "express";
import { getUsers, Register, Login, Logout } from "../controllers/Users.js";
import { AddSet } from "../controllers/CardSets.js";
import { verifyToken } from "../middleware/VerifyToken.js";
import { refreshToken } from "../controllers/RefreshToken.js";
import { GetCardSets } from "../models/GetCardSets.js";

const router = express.Router();

router.get("/users", verifyToken, getUsers);
router.post("/users", Register);
router.post("/login", Login);
router.post("/addSet", AddSet);
router.get("/getSets", GetCardSets);
router.get("/token", refreshToken);
router.delete("/logout", Logout);

export default router;
