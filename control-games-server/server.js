const express = require('express')
const cors = require('cors')
const sqlite3 = require('sqlite3').verbose()
const app = express()
const port = 3002;

app.use(cors())
app.use(express.json())

const db = new sqlite3.Database('controlGames.db')


//criando tabela games
db.run('CREATE TABLE IF NOT EXISTS jogos (id INTEGER PRIMARY KEY AUTOINCREMENT, nomeJogo TEXT NOT NULL, urlCapaJogo TEXT NOT NULL, plataforma INTEGER NOT NULL, status TEXT NOT NULL, categoria TEXT NOT NULL, progresso TEXT NOT NULL, recomendo TEXT NOT NULL, ano TEXT NOT NULL, descricao TEXT NOT NULL, usuario INTEGER NOT NULL, UNIQUE(nomeJogo, usuario), FOREIGN KEY(plataforma) REFERENCES plataformas(id), FOREIGN KEY(usuario) REFERENCES usuarios(id))')



// criando tabela usuarios
db.run('CREATE TABLE IF NOT EXISTS usuarios (id INTEGER PRIMARY KEY AUTOINCREMENT, nickname TEXT NOT NULL UNIQUE, email TEXT NOT NULL, senha TEXT NOT NULL)')

//criando tabela plataformas
db.run('CREATE TABLE IF NOT EXISTS plataformas (id INTEGER PRIMARY KEY AUTOINCREMENT, nomePlataforma TEXT NOT NULL UNIQUE, urlCapaPlataforma TEXT NOT NULL)')

// --------------------------------------------------
app.get('/jogos', (req, res) => {
    db.all('SELECT jogos.*, usuarios.nickname AS sala FROM jogos LEFT JOIN usuarios ON jogos.usuario = usuarios.id', (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json(rows);
    });
});

app.post('/jogos', (req, res) => {
    const { nomeJogo, urlCapaJogo, plataforma, status, categoria, progresso, recomendo, ano, descricao, usuario } = req.body;
    console.log('Nome do Jogo:', nomeJogo);
    console.log('Capa:', urlCapaJogo);
    console.log('Plataforma:', plataforma);
    console.log('Status:', status);
    console.log('Categoria:', categoria);
    console.log('Progresso:', progresso);
    console.log('Recomendo:', recomendo);
    console.log('Ano:', ano);
    console.log('Descrição:', descricao);
    console.log('Usuario:', usuario);

    if (!nomeJogo || !urlCapaJogo || !plataforma || !status || !categoria || !progresso || !recomendo || !ano || !descricao || !usuario) {
        return res.status(400).json({ error: 'Todas as informações são obrigatórias' });
    }

    // Verifica se a sala existe
    // Código restante para adicionar o jogo ao banco de dados
db.run('INSERT INTO jogos (nomeJogo, urlCapaJogo, plataforma, status, categoria, progresso, recomendo, ano, descricao, usuario) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [nomeJogo, urlCapaJogo, plataforma, status, categoria, progresso, recomendo, ano, descricao, usuario], function (err) {
    if (err) {
        return res.status(500).json({ error: err.message });
    }

    res.json({ id: this.lastID, nomeJogo });
});


});

// ---------------------------------------------------------------------
app.get('/usuarios', (req, res) => {
    db.all('SELECT id, nickname, email, senha FROM usuarios', (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json(rows);
    });
});

app.post('/usuarios', (req, res) => {
    const { nickname, email, senha } = req.body;

    if (!nickname || !email || !senha) {
        return res.status(400).json({ error: 'Os campos são obrigatórios' });
    }

    db.run('INSERT INTO usuarios (nickname, email, senha) VALUES (?, ?, ?)', [nickname, email, senha], function (err) {
        if (err) {
            return res.status(500).json({ error: err.message });
        }

        res.json({ id: this.lastID, nickname });
    });
});

app.put('/usuarios/:nickname', (req, res) => {
    const { nickname } = req.params;
    const {email, senha } = req.body;

    console.log('Dados recebidos no servidor:', { email, senha });

    if (!email || !senha) {
        return res.status(400).json({ error: 'Os campos são obrigatórios' });
    }

    db.run(
        'UPDATE usuarios SET email = ?, senha = ? WHERE nickname = ?',
        [email, senha, nickname],
        function (err) {
            if (err) {
                console.error('Erro ao atualizar usuário:', err);
                return res.status(500).json({ error: err.message });
            }

            // // Consultar o banco de dados novamente para obter os detalhes atualizados do usuário
            // db.get('SELECT * FROM usuarios WHERE nickname = ?', [newNickname], (err, row) => {
            //     if (err) {
            //         console.error('Erro ao consultar usuário após atualização:', err);
            //         return res.status(500).json({ error: err.message });
            //     }

            //     if (!row) {
            //         console.error('Usuário não encontrado após atualização');
            //         return res.status(404).json({ error: 'Usuário não encontrado após atualização' });
            //     }

            //     console.log('Usuário atualizado com sucesso:', row);
            //     res.json({ message: 'Usuário atualizado com sucesso', usuario: row });
            // });
        }
    );
});







app.post('/usuarios/login', (req, res) => {
    const { nickname, senha } = req.body;

    if (!nickname || !senha) {
        return res.status(400).json({ error: 'Nome da sala e senha são obrigatórios.' });
    }

    db.get('SELECT * FROM usuarios WHERE nickname = ? AND senha = ?', [nickname, senha], (err, salaRow) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }

        if (!salaRow) {
            return res.status(401).json({ error: 'Usuiario não encontrado ou senha incorreta.' });
        }

        res.json({ id: salaRow.id, nickname: salaRow.nickname });
    });
});


// --------------------------------------------------------------------------------------------------------------------------------------------
app.get('/plataformas', (req, res) => {
    db.all('SELECT id, nomePlataforma, urlCapaPlataforma FROM plataformas', (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json(rows);
    });
});

app.post('/plataformas', (req, res) => {
    const { nomePlataforma, urlCapaPlataforma } = req.body;

    if (!nomePlataforma || !urlCapaPlataforma) {
        return res.status(400).json({ error: 'Os campos são obrigatórios' });
    }

    db.run('INSERT INTO plataformas (nomePlataforma, urlCapaPlataforma) VALUES (?, ?)', [nomePlataforma, urlCapaPlataforma], function (err) {
        if (err) {
            return res.status(500).json({ error: err.message });
        }

        res.json({ id: this.lastID, nomePlataforma });
    });
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
