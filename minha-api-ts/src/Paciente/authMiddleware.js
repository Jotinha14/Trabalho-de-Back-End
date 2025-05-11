const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(403).json({ message: 'Token não fornecido' });
  }

  try {
    const decoded = jwt.verify(token, 'secreta_chave');
    req.paciente = decoded; // Armazena os dados do paciente no `req` para acesso nas próximas etapas
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Token inválido' });
  }
};

module.exports = authMiddleware;
