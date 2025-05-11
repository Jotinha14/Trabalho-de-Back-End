import express from 'express';
import pacienteRoutes from './routes/pacienteRoutes';
import medicamentoRoutes from './routes/medicamentoRoutes';
import fornecedorRoutes from './routes/fornecedorRoutes';
import controleRoutes from './routes/controleEstoqueRoutes';
import farmaciaRoutes from './routes/farmaciaRoutes';
import loteRoutes from './routes/loteRoutes';
import estoqueRoutes from './routes/estoqueRoutes';
import medicoRoutes from './routes/medicoRoutes';
import farmaceuticoRoutes from './routes/farmaceuticoRoutes';

const app = express();
app.use(express.json());

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
