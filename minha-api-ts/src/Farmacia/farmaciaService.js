const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const FarmaciaService = {
  create: async (data) => {
    return await prisma.farmaciaPopular.create({ data });
  },

  getAll: async () => {
    return await prisma.farmaciaPopular.findMany();
  },

  getById: async (id) => {
    return await prisma.farmaciaPopular.findUnique({
      where: { id: Number(id) }
    });
  },

  update: async (id, data) => {
    return await prisma.farmaciaPopular.update({
      where: { id: Number(id) },
      data
    });
  },

  delete: async (id) => {
    return await prisma.farmaciaPopular.delete({
      where: { id: Number(id) }
    });
  }
};

module.exports = FarmaciaService;
