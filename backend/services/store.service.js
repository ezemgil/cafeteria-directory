import { Op } from "sequelize";
import Stores from "../models/Stores.js";

const getStoresByArgentinaCountry = async (req, res) => {
  try {
    const stores = await Stores.findAll({ where: { country: "AR" } });
    res.json(stores);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

const getStoresByArgentinaCountryAndNotAMBA = async (req, res) => {
  try {
    const stores = await Stores.findAll({
      where: {
        country: "AR",
        province: {
          [Op.notIn]: ["C", "B"],
        },
      },
    });
    res.json(stores);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

const findStoreByName = async (req, res) => {
  console.log("findStoreByName");
  try {
    const { name } = req.query;
    const stores = await Stores.findAll({
      where: {
        country: "AR",
        name: { [Op.like]: `%${name}%` },
      },
    });
    res.json(stores);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

const findStoreById = async (req, res) => {
  try {
    const store = await Stores.findByPk(req.params.id);
    res.json(store);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

const createStore = async (req, res) => {
  try {
    const store = await Stores.create(req.body);
    res.json(store);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

const updateStore = async (req, res) => {
  try {
    const store = await Stores.findByPk(req.params.id);
    store.update(req.body);
    res.json(store);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

const deleteStore = async (req, res) => {
  try {
    const store = await Stores.findByPk(req.params.id);
    store.destroy();
    res.json(store);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

const getCitiesFromArgentina = async (req, res) => {
  try {
    const cities = await Stores.findAll({
      where: {
        country: "AR",
      },
      attributes: ["city"],
      group: ["city"],
    });
    res.json(cities);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

export default {
  getStoresByArgentinaCountry,
  getStoresByArgentinaCountryAndNotAMBA,
  findStoreByName,
  findStoreById,
  createStore,
  updateStore,
  deleteStore,
  getCitiesFromArgentina,
};
