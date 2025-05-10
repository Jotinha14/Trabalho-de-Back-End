const express = require('express'); // Importa o Express
const app = express(); // Cria a instância do aplicativo Express

// Importa as rotas
const medicamentoRoutes = require('./routes/medicamentoRoutes'); // Ajuste o caminho conforme necessário

app.use(express.json()); // Middleware para interpretar o corpo da requisição como JSON

// Definindo a rota para medicamentos
app.use('/medicamentos', medicamentoRoutes); // As rotas para 'medicamentos' estarão dentro do arquivo 'medicamentoRoutes.js'

// Configurando a porta do servidor
const PORT = process.env.PORT || 3000; 

// Iniciando o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

