const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const statusValido = ['RESERVADO', 'CONCLUIDO', 'CANCELADO'];

const ControleEstoqueService = {
  create: async (data) => {
    if (!statusValido.includes(data.status)) {
      throw new Error('Status inválido');
    }

    return await prisma.controleEstoque.create({
      data: {
        medicoId: data.medicoId,
        pacienteId: data.pacienteId,
        estoqueId: data.estoqueId,
        quantidade: data.quantidade,
        status: data.status,
      },
    });
  },

  getAll: async () => {
    return await prisma.controleEstoque.findMany({
      include: {
        medico: true,
        paciente: true,
        estoque: true,
      },
    });
  },

  updateStatus: async (id, status) => {
    if (!statusValido.includes(status)) {
      throw new Error('Status inválido');
    }

    return await prisma.controleEstoque.update({
      where: { id },
      data: { status },
    });
  },

  delete: async (id) => {
    return await prisma.controleEstoque.delete({
      where: { id },
    });
  },
};

module.exports = ControleEstoqueService;
