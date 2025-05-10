const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const ControleEstoqueService = {
  // Criar controle
  create: async (data) => {
    return await prisma.controleEstoque.create({ data });
  },

  // Listar todos
  getAll: async () => {
    return await prisma.controleEstoque.findMany({
      include: {
        medico: true,
        paciente: true,
        estoque: true
      }
    });
  },

  // Atualizar status
  updateStatus: async (id, status) => {
    return await prisma.controleEstoque.update({
      where: { id },
      data: { status }
    });
  },

  // Deletar
  delete: async (id) => {
    return await prisma.controleEstoque.delete({ where: { id } });
  },
};

module.exports = ControleEstoqueService;
