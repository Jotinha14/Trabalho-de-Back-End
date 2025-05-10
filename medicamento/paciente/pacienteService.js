const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const PacienteService = {

  // Criar paciente com senha criptografada
  register: async (data) => {
    const { nome, email, senha } = data;

    // Verifica se o paciente já existe
    const existingPaciente = await prisma.paciente.findUnique({
      where: { email: email },
    });

    if (existingPaciente) {
      throw new Error('Email já cadastrado');
    }

    // Criptografa a senha antes de salvar
    const hashedPassword = await bcrypt.hash(senha, 10);

    const paciente = await prisma.paciente.create({
      data: {
        nome,
        email,
        senha: hashedPassword,
      },
    });

    return paciente;
  },

  // Autenticar paciente (login)
  login: async (email, senha) => {
    // Verifica se o paciente existe
    const paciente = await prisma.paciente.findUnique({
      where: { email: email },
    });

    if (!paciente) {
      throw new Error('Paciente não encontrado');
    }

    // Verifica se a senha está correta
    const passwordMatch = await bcrypt.compare(senha, paciente.senha);
    if (!passwordMatch) {
      throw new Error('Senha incorreta');
    }

    // Gerar token JWT para autenticação
    const token = jwt.sign({ id: paciente.id, email: paciente.email }, 'secreta_chave', {
      expiresIn: '1h',
    });

    return token;
  },

};

module.exports = PacienteService;
