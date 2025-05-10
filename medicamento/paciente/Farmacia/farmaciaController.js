const FarmaciaService = require('../services/farmaciaService');

const FarmaciaController = {
  create: async (req, res) => {
    try {
      const nova = await FarmaciaService.create(req.body);
      res.status(201).json(nova);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },

  getAll: async (req, res) => {
    try {
      const lista = await FarmaciaService.getAll();
      res.status(200).json(lista);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },

  getById: async (req, res) => {
    try {
      const farmacia = await FarmaciaService.getById(req.params.id);
      res.status(200).json(farmacia);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },

  update: async (req, res) => {
    try {
      const atualizada = await FarmaciaService.update(req.params.id, req.body);
      res.status(200).json(atualizada);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },

  delete: async (req, res) => {
    try {
      await FarmaciaService.delete(req.params.id);
      res.status(204).send();
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }
};

module.exports = FarmaciaController;
