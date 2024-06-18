import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import dbInit from "./data/db-init.js";

import storeRouter from "./routes/store.routes.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/status", (req, res) => {
  res.json({ status: "Disponible" });
});
app.use("/api", storeRouter);

(async function start() {
  const PORT = process.env.PORT || 3000;
  await dbInit();
  app.listen(PORT, () => {
    console.log(`Servidor iniciado y escuchando en el puerto ${PORT}`);
  });
})();
