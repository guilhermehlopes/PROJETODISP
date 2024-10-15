import express from 'express';

const app = express();
const port = 3001;

app.use(express.json());

app.post('/avaliar', (req, res) => {
  const { expressao } = req.body;

  if (!expressao || typeof expressao !== 'string') {
    return res.status(400).json({ mensagem: 'Expressão inválida ou não fornecida.' });
  }

  try {
    if (expressao.includes('/0')) {
      return res.status(400).json({ mensagem: 'Erro: Divisão por zero' });
    }

    const resultado = eval(expressao);
    res.json({ resultado });
  } catch (error) {
    res.status(400).json({ mensagem: 'Expressão inválida' });
  }
});

app.listen(port, () => {
  console.log(`API rodando na porta ${port}`);
});
