const EstoqueService = require('../services/estoqueService');

const EstoqueController = {
  create: async (req, res) => {
    try {
      const estoque = await EstoqueService.create(req.body);
      res.status(201).json(estoque);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },

  getAll: async (req, res) => {
    try {
      const estoques = await EstoqueService.getAll();
      res.status(200).json(estoques);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },

  getById: async (req, res) => {
    try {
      const estoque = await EstoqueService.getById(req.params.id);
      res.status(200).json(estoque);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },

  update: async (req, res) => {
    try {
      const atualizado = await EstoqueService.update(req.params.id, req.body);
      res.status(200).json(atualizado);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },

  delete: async (req, res) => {
    try {
      await EstoqueService.delete(req.params.id);
      res.status(204).send();
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }
};

module.exports = EstoqueController;
