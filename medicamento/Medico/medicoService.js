const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const MedicoService = {
  create: async (data) => {
    return await prisma.medico.create({ data });
  },

  getAll: async () => {
    return await prisma.medico.findMany();
  },

  getById: async (id) => {
    return await prisma.medico.findUnique({
      where: { id: Number(id) },
    });
  },

  update: async (id, data) => {
    return await prisma.medico.update({
      where: { id: Number(id) },
      data,
    });
  },

  delete: async (id) => {
    return await prisma.medico.delete({
      where: { id: Number(id) },
    });
  }
};

module.exports = MedicoService;
