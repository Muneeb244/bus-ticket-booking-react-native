import express from "express";
import { bookTicket, getUserTicket } from "../controllers/ticket.js";
import { verifyToken } from "../middleware/verify.js";

const router = express.Router();

router.post("/book", verifyToken, bookTicket);
router.get("/my-tickets", verifyToken, getUserTicket);

export default router;
