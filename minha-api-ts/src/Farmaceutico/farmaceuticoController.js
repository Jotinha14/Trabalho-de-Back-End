const FarmaceuticoService = require('../services/farmaceuticoService');

const FarmaceuticoController = {
  create: async (req, res) => {
    try {
      const farmaceutico = await FarmaceuticoService.create(req.body);
      res.status(201).json(farmaceutico);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  getAll: async (req, res) => {
    try {
      const lista = await FarmaceuticoService.getAll();
      res.status(200).json(lista);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  getById: async (req, res) => {
    try {
      const { id } = req.params;
      const item = await FarmaceuticoService.getById(parseInt(id));
      res.status(200).json(item);
    } catch (error) {
      res.status(404).json({ message: 'Farmacêutico não encontrado' });
    }
  },

  update: async (req, res) => {
    try {
      const { id } = req.params;
      const updated = await FarmaceuticoService.update(parseInt(id), req.body);
      res.status(200).json(updated);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  delete: async (req, res) => {
    try {
      const { id } = req.params;
      await FarmaceuticoService.delete(parseInt(id));
      res.status(204).send();
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
};

module.exports = FarmaceuticoController;
