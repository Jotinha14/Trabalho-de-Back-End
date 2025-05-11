const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const LoteService = {
  create: async (data) => {
    return await prisma.lote.create({ data });
  },

  getAll: async () => {
    return await prisma.lote.findMany({ include: { produto: true } });
  },

  getById: async (id) => {
    return await prisma.lote.findUnique({
      where: { id: Number(id) },
      include: { produto: true }
    });
  },

  update: async (id, data) => {
    return await prisma.lote.update({
      where: { id: Number(id) },
      data
    });
  },

  delete: async (id) => {
    return await prisma.lote.delete({
      where: { id: Number(id) }
    });
  }
};

module.exports = LoteService;
