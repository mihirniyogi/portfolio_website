import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import testRouter from "./routes/test.js";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/* --------- Pre-processing --------- */

app.use(express.json());

/* --------- Routes --------- */

app.use("/api/test", testRouter);

/* --------- Static files --------- */

app.use(express.static(path.join(__dirname, "../../frontend/dist")));

/* --------- Catch-all --------- */

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../../frontend/dist", "index.html"));
});

export default app;
