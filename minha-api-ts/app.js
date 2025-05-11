const express = require('express');
const app = express();
const pacienteRoutes = require('./routes/pacienteRoutes');
const medicamentoRoutes = require('./routes/medicamentoRoutes');
const fornecedorRoutes = require('./routes/fornecedorRoutes');
const controleRoutes = require('./routes/controleEstoqueRoutes');
const farmaciaRoutes = require('./routes/farmaciaRoutes');
const loteRoutes = require('./routes/loteRoutes');
const estoqueRoutes = require('./routes/estoqueRoutes');
const medicoRoutes = require('./routes/medicoRoutes');
const farmaceuticoRoutes = require('./routes/farmaceuticoRoutes');

app.use(express.json());

// Usar rotas
app.use('/pacientes', pacienteRoutes);
app.use('/medicamentos', medicamentoRoutes);
app.use('/fornecedores', fornecedorRoutes);
app.use('/controle-estoque', controleRoutes);
app.use('/farmacias', farmaciaRoutes);
app.use('/lotes', loteRoutes);
app.use('/estoques', estoqueRoutes);
app.use('/medicos', medicoRoutes);
app.use('/farmaceuticos', farmaceuticoRoutes);


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});





