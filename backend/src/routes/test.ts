import { Router } from "express";

const router = Router();

// GET /test
router.get("/", (req, res) => {
  res
    .status(200)
    .send({ message: "Hello from the backend!!! i love Express.js" });
});

export default router;
