const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const FornecedorService = {

  // Criar fornecedor
  create: async (data) => {
    const { nome, status, telefone } = data;

    const fornecedor = await prisma.fornecedor.create({
      data: {
        nome,
        status: status || "Disponível", // Caso não passe status, assume "Disponível"
        telefone,
      },
    });

    return fornecedor;
  },

  // Obter todos os fornecedores
  getAll: async () => {
    return await prisma.fornecedor.findMany();
  },

  // Atualizar status de fornecedor
  updateStatus: async (id, status) => {
    const fornecedor = await prisma.fornecedor.update({
      where: { id },
      data: { status },
    });

    return fornecedor;
  },

  // Deletar fornecedor
  delete: async (id) => {
    return await prisma.fornecedor.delete({
      where: { id },
    });
  },

};

module.exports = FornecedorService;
