import express, { Request, Response } from "express";
import "dotenv/config";

const app = express();
const PORT = process.env.PORT;

app.get("/api", (req: Request, res: Response) => {
  res.json({ message: "Hello from the backend!" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
