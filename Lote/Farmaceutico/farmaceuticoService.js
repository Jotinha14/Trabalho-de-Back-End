const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const FarmaceuticoService = {
  create: async (data) => {
    return await prisma.farmaceutico.create({
      data: { nome: data.nome },
    });
  },

  getAll: async () => {
    return await prisma.farmaceutico.findMany();
  },

  getById: async (id) => {
    return await prisma.farmaceutico.findUnique({
      where: { id },
    });
  },

  update: async (id, data) => {
    return await prisma.farmaceutico.update({
      where: { id },
      data: { nome: data.nome },
    });
  },

  delete: async (id) => {
    return await prisma.farmaceutico.delete({
      where: { id },
    });
  },
};

module.exports = FarmaceuticoService;
