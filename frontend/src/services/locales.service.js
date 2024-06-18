import httpService from "./http.service";
import { LOCALES } from "../config/server.config";

async function getLocales() {
  return httpService.get(`${LOCALES}`);
}

async function getLocalesInterior() {
  return httpService.get(`${LOCALES}/interior`);
}

async function findStoreByName(name) {
  return httpService.get(`${LOCALES}/buscar?name=${name}`);
}

async function getStoreById(store) {
  return httpService.get(`${LOCALES}/${store.id}`);
}

async function createStore(store) {
  return httpService.post(`${LOCALES}`, store);
}

async function updateStore(store) {
  return httpService.put(`${LOCALES}/${store.id}`, store);
}

async function deleteStore(store) {
  return httpService.delete(`${LOCALES}/${store.id}`);
}

async function getCiudadesArgentina() {
  return httpService.get(`http://localhost:3001/api/ciudades`);
}

const localesService = {
  getLocales,
  getLocalesInterior,
  findStoreByName,
  getStoreById,
  createStore,
  updateStore,
  deleteStore,
  getCiudadesArgentina,
};

export default localesService;
