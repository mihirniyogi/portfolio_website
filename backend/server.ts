import express, { Request, Response } from "express";
import "dotenv/config";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = process.env.PORT;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// handle http requests
app.get("/api", (req: Request, res: Response) => {
  res.json({ message: "Hello from the backend!" });
});

// serve static files
app.use(express.static(path.join(__dirname, "../../frontend/dist")));

// handle any requests not matching static files
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../../frontend/dist", "index.html"));
});

// start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
