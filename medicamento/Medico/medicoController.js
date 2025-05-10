const MedicoService = require('../services/medicoService');

const MedicoController = {
  create: async (req, res) => {
    try {
      const medico = await MedicoService.create(req.body);
      res.status(201).json(medico);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },

  getAll: async (req, res) => {
    try {
      const medicos = await MedicoService.getAll();
      res.status(200).json(medicos);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },

  getById: async (req, res) => {
    try {
      const medico = await MedicoService.getById(req.params.id);
      res.status(200).json(medico);
    } catch (err) {
      res.status(404).json({ message: 'Médico não encontrado' });
    }
  },

  update: async (req, res) => {
    try {
      const medico = await MedicoService.update(req.params.id, req.body);
      res.status(200).json(medico);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },

  delete: async (req, res) => {
    try {
      await MedicoService.delete(req.params.id);
      res.status(204).send();
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }
};

module.exports = MedicoController;
