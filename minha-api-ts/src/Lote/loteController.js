const LoteService = require('../services/loteService');

const LoteController = {
  create: async (req, res) => {
    try {
      const lote = await LoteService.create(req.body);
      res.status(201).json(lote);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },

  getAll: async (req, res) => {
    try {
      const lotes = await LoteService.getAll();
      res.status(200).json(lotes);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },

  getById: async (req, res) => {
    try {
      const lote = await LoteService.getById(req.params.id);
      res.status(200).json(lote);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },

  update: async (req, res) => {
    try {
      const atualizado = await LoteService.update(req.params.id, req.body);
      res.status(200).json(atualizado);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },

  delete: async (req, res) => {
    try {
      await LoteService.delete(req.params.id);
      res.status(204).send();
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }
};

module.exports = LoteController;
