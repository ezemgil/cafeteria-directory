import express from "express";
import storeService from "../services/store.service.js";

const storeRouter = express.Router();

storeRouter.get("/locales", storeService.getStoresByArgentinaCountry);
storeRouter.get(
  "/locales/interior",
  storeService.getStoresByArgentinaCountryAndNotAMBA
);

storeRouter.get("/locales/buscar", storeService.findStoreByName);
storeRouter.get("/locales/:id", storeService.findStoreById);
storeRouter.post("/locales", storeService.createStore);
storeRouter.put("/locales/:id", storeService.updateStore);
storeRouter.delete("/locales/:id", storeService.deleteStore);
storeRouter.get("/ciudades", storeService.getCitiesFromArgentina);

export default storeRouter;
