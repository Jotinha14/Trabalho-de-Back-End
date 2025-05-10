const MedicamentoService = require('../services/medicamentoService');

const MedicamentoController = {

  // Criar medicamento
  create: async (req, res) => {
    try {
      const medicamento = await MedicamentoService.create(req.body);
      res.status(201).json(medicamento);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  // Obter todos os medicamentos
  getAll: async (req, res) => {
    try {
      const medicamentos = await MedicamentoService.getAll();
      res.status(200).json(medicamentos);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  // Obter medicamento por ID
  getById: async (req, res) => {
    try {
      const medicamento = await MedicamentoService.getById(req.params.id);
      res.status(200).json(medicamento);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  },

  // Atualizar medicamento
  update: async (req, res) => {
    try {
      const medicamento = await MedicamentoService.update(req.params.id, req.body);
      res.status(200).json(medicamento);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  // Deletar medicamento
  delete: async (req, res) => {
    try {
      await MedicamentoService.delete(req.params.id);
      res.status(204).send();
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  },

};

module.exports = MedicamentoController;
