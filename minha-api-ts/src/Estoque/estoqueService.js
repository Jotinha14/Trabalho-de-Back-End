const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const EstoqueService = {
  create: async (data) => {
    return await prisma.estoque.create({ data });
  },

  getAll: async () => {
    return await prisma.estoque.findMany({ include: { lote: true } });
  },

  getById: async (id) => {
    return await prisma.estoque.findUnique({
      where: { id: Number(id) },
      include: { lote: true }
    });
  },

  update: async (id, data) => {
    return await prisma.estoque.update({
      where: { id: Number(id) },
      data
    });
  },

  delete: async (id) => {
    return await prisma.estoque.delete({
      where: { id: Number(id) }
    });
  }
};

module.exports = EstoqueService;
