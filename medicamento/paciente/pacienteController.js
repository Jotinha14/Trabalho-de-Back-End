const PacienteService = require('../services/pacienteService');

const PacienteController = {

  // Registrar paciente
  register: async (req, res) => {
    try {
      const paciente = await PacienteService.register(req.body);
      res.status(201).json({ message: 'Paciente registrado com sucesso', paciente });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  // Login do paciente
  login: async (req, res) => {
    const { email, senha } = req.body;
    try {
      const token = await PacienteService.login(email, senha);
      res.status(200).json({ message: 'Login bem-sucedido', token });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

};

module.exports = PacienteController;
