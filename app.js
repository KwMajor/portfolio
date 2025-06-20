const express = require('express');
const pool = require('./db');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/projetos', async (req, res) => {
  try {
    const [projetos] = await pool.query("SELECT * FROM projetos ORDER BY id ASC");
    res.render('projetos', {
      title: 'Meus Projetos',
      projetos: projetos
     });
  } catch (error) {
    console.error("Erro ao buscar projetos do banco:", error);
    res.status(500).send("Erro ao carregar a página de projetos.");
  }
});

app.get('/', async (req, res) => {
  try {
    const [infoRows] = await pool.query("SELECT * FROM about_index WHERE id = 1");
    if (infoRows.length === 0) {
      throw new Error("Nenhuma informação encontrada na tabela 'about_index' do banco de dados.");
    }
    const info = infoRows[0];
    const dadosParaTemplate = {
      title: 'Pagina inicial',
      data: {
        about: {
          texto: info.texto,
          link1: info.link1,
          link2: info.link2
        },
      }
    };
    res.render('index', dadosParaTemplate);
  } catch (error) {
    console.error("Erro ao buscar dados para a página inicial:", error);
    res.status(500).send("Ocorreu um erro ao carregar os dados da página.");
  }
});

app.get('/formacao', async (req, res) => {
  try {
    
    const [formacoes] = await pool.query("SELECT * FROM formacao ORDER BY id DESC");

    
    res.render('formacao', {
      title: 'Minha Formação',
      formacoes: formacoes
    });
  } catch (error) {
    console.error("Erro ao buscar dados de formação:", error);
    res.status(500).send("Erro ao carregar a página de formação.");
  }
});

app.get('/api/about', async (req, res) => {
  try {
    const [infoRows] = await pool.query("SELECT * FROM about_index WHERE id = 1");
    if (infoRows.length === 0) {
      return res.status(404).json({ message: 'Informações não encontradas.' });
    }
    res.status(200).json(infoRows[0]);
  } catch (error) {
    console.error("Erro ao buscar informações 'Sobre Mim' via API:", error);
    res.status(500).json({ message: 'Erro no servidor ao buscar os dados.' });
  }
});

app.put('/api/about', async (req, res) => {
  try {
    const { texto, link1, link2 } = req.body;
    if (!texto || !link1 || !link2) {
      return res.status(400).json({ message: 'Todos os campos (texto, link1, link2) são obrigatórios.' });
    }
    await pool.query(
      'UPDATE about_index SET texto = ?, link1 = ?, link2 = ? WHERE id = 1',
      [texto, link1, link2]
    );
    res.status(200).json({ message: 'Informações "Sobre Mim" atualizadas com sucesso!' });
  } catch (error) {
    console.error("Erro ao atualizar as informações 'Sobre Mim':", error);
    res.status(500).json({ message: 'Erro no servidor ao atualizar os dados.' });
  }
});

app.get('/api/projects', async (req, res) => {
  try {
    const [projetos] = await pool.query("SELECT * FROM projetos ORDER BY id ASC");
    res.status(200).json(projetos);
  } catch (error) {
    console.error("Erro ao buscar projetos via API:", error);
    res.status(500).json({ message: 'Erro no servidor ao buscar os projetos.' });
  }
});

app.post('/api/projects', async (req, res) => {
  try {
    const { nome, descricao, link, imagem } = req.body;
    if (!nome || !descricao || !link || !imagem) {
      return res.status(400).json({ message: 'Todos os campos (nome, descricao, link, imagem) são obrigatórios.' });
    }
    const [result] = await pool.query(
      'INSERT INTO projetos (nome, descricao, link, imagem) VALUES (?, ?, ?, ?)',
      [nome, descricao, link, imagem]
    );
    res.status(201).json({ message: `Projeto adicionado com sucesso!`, id: result.insertId });
  } catch (error) {
    console.error("Erro ao adicionar novo projeto:", error);
    res.status(500).json({ message: 'Erro no servidor ao adicionar o projeto.' });
  }
});

app.put('/api/projects/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { nome, descricao, link, imagem } = req.body;
    if (!nome || !descricao || !link || !imagem) {
      return res.status(400).json({ message: 'Todos os campos (nome, descricao, link, imagem) são obrigatórios.' });
    }
    await pool.query(
      'UPDATE projetos SET nome = ?, descricao = ?, link = ?, imagem = ? WHERE id = ?',
      [nome, descricao, link, imagem, id]
    );
    res.status(200).json({ message: `Projeto com ID ${id} atualizado com sucesso!` });
  } catch (error) {
    console.error("Erro ao atualizar o projeto:", error);
    res.status(500).json({ message: 'Erro no servidor ao atualizar os dados.' });
  }
});

app.delete('/api/projects/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const [result] = await pool.query('DELETE FROM projetos WHERE id = ?', [id]);
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: `Projeto com ID ${id} não encontrado.` });
    }
    res.status(200).json({ message: `Projeto com ID ${id} excluído com sucesso!` });
  } catch (error) {
    console.error("Erro ao excluir o projeto:", error);
    res.status(500).json({ message: 'Erro no servidor ao excluir o projeto.' });
  }
});


app.get('/api/formacao', async (req, res) => {
  try {
    const [formacoes] = await pool.query("SELECT * FROM formacao ORDER BY id DESC");
    res.status(200).json(formacoes);
  } catch (error) {
    console.error("Erro ao buscar formações via API:", error);
    res.status(500).json({ message: 'Erro no servidor' });
  }
});

app.post('/api/formacao', async (req, res) => {
  try {
    const { instituicao, curso, anoDeConclusao } = req.body;
    if (!instituicao || !curso || !anoDeConclusao) {
      return res.status(400).json({ message: 'Todos os campos (instituicao, curso, anoDeConclusao) são obrigatórios.' });
    }
    const [result] = await pool.query(
      'INSERT INTO formacao (instituicao, curso, anoDeConclusao) VALUES (?, ?, ?)',
      [instituicao, curso, anoDeConclusao]
    );
    res.status(201).json({ message: `Formação adicionada com sucesso!`, id: result.insertId });
  } catch (error) {
    console.error("Erro ao adicionar nova formação:", error);
    res.status(500).json({ message: 'Erro no servidor' });
  }
});

app.put('/api/formacao/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { instituicao, curso, anoDeConclusao } = req.body;
    if (!instituicao || !curso || !anoDeConclusao) {
      return res.status(400).json({ message: 'Todos os campos são obrigatórios.' });
    }
    const [result] = await pool.query(
      'UPDATE formacao SET instituicao = ?, curso = ?, anoDeConclusao = ? WHERE id = ?',
      [instituicao, curso, anoDeConclusao, id]
    );
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: `Formação com ID ${id} não encontrada.` });
    }
    res.status(200).json({ message: `Formação com ID ${id} atualizada com sucesso!` });
  } catch (error) {
    console.error("Erro ao atualizar formação:", error);
    res.status(500).json({ message: 'Erro no servidor' });
  }
});

app.delete('/api/formacao/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const [result] = await pool.query('DELETE FROM formacao WHERE id = ?', [id]);
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: `Formação com ID ${id} não encontrada.` });
    }
    res.status(200).json({ message: `Formação com ID ${id} excluída com sucesso!` });
  } catch (error) {
    console.error("Erro ao excluir formação:", error);
    res.status(500).json({ message: 'Erro no servidor' });
  }
});


app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
