const FornecedorService = require('../services/fornecedorService');

const FornecedorController = {

  // Criar fornecedor
  create: async (req, res) => {
    try {
      const fornecedor = await FornecedorService.create(req.body);
      res.status(201).json({ message: 'Fornecedor criado com sucesso', fornecedor });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  // Obter todos os fornecedores
  getAll: async (req, res) => {
    try {
      const fornecedores = await FornecedorService.getAll();
      res.status(200).json(fornecedores);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  // Atualizar status de fornecedor
  updateStatus: async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;

    try {
      const fornecedor = await FornecedorService.updateStatus(id, status);
      res.status(200).json({ message: 'Status atualizado com sucesso', fornecedor });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  // Deletar fornecedor
  delete: async (req, res) => {
    const { id } = req.params;

    try {
      const fornecedor = await FornecedorService.delete(id);
      res.status(200).json({ message: 'Fornecedor deletado com sucesso', fornecedor });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

};

module.exports = FornecedorController;
