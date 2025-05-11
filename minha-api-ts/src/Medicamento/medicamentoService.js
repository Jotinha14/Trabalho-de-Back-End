const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const MedicamentoService = {

  // Criar medicamento
  create: async (data) => {
    try {
      const medicamento = await prisma.medicamento.create({
        data: data,
      });
      return medicamento;
    } catch (error) {
      throw new Error('Erro ao criar medicamento: ' + error.message);
    }
  },

  // Obter todos os medicamentos
  getAll: async () => {
    try {
      const medicamentos = await prisma.medicamento.findMany();
      return medicamentos;
    } catch (error) {
      throw new Error('Erro ao obter medicamentos: ' + error.message);
    }
  },

  // Obter medicamento por ID
  getById: async (id) => {
    try {
      const medicamento = await prisma.medicamento.findUnique({
        where: { idProduto: id },
      });
      if (!medicamento) {
        throw new Error('Medicamento não encontrado');
      }
      return medicamento;
    } catch (error) {
      throw new Error('Erro ao obter medicamento: ' + error.message);
    }
  },

  // Atualizar medicamento
  update: async (id, data) => {
    try {
      const medicamento = await prisma.medicamento.update({
        where: { idProduto: id },
        data: data,
      });
      return medicamento;
    } catch (error) {
      throw new Error('Erro ao atualizar medicamento: ' + error.message);
    }
  },

  // Deletar medicamento
  delete: async (id) => {
    try {
      const medicamento = await prisma.medicamento.delete({
        where: { idProduto: id },
      });
      return medicamento;
    } catch (error) {
      throw new Error('Erro ao deletar medicamento: ' + error.message);
    }
  },

};

module.exports = MedicamentoService;


