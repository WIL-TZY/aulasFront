// npm install sqlite3 ----> Comando p/ instalar a dependência do sqlite3 para usar com o NodeJS

const sqlite = require('sqlite3').verbose();

const bd = new sqlite.Database('./teste.sqlite3', function(erro) {
    if(erro) {
        console.log("Erro na conexão com o banco de dados: ", erro);
    }
    else {
        console.log("Conexão com banco de dados estabelecida com sucesso.");
    }
});

let nome = "Fulano";
let idade = 32;
// INSERT (1)
// É mais seguro usar VALUES (?, ?) do que adicionar os valores diretamente
bd.all(`INSERT INTO contatos (nome, idade) VALUES (?, ?);`, [nome, idade], (erro, rows) => {
    if (erro) {
        throw erro;
    }
});

nome = "Beltrano";
idade = 40;
// INSERT (2) // OR 1=1
bd.all(`INSERT INTO contatos (nome, idade) VALUES ('${nome}', ${idade});`, (erro, rows) => {
    if (erro) {
        throw erro;
    }
});

// UPDATE
bd.all(`UPDATE contatos SET nome = 'João' where id=5`, [], (erro) => {
    if(erro) {
        throw erro;
    }
});

// DELETE
//bd.all(`DELETE FROM contatos WHERE id=2`);

// SELECT
bd.all(`SELECT id, nome, idade FROM contatos`, [], (err, rows) => {
    if(err) {
        throw err;
    }

    //console.log("Rows:\n", rows);

    rows.forEach((row) => {
        console.log(row.id, row.nome, row.idade);
    })
});

bd.close((erro) => {
    if (erro) {
        console.log("Erro no encerramento do banco: ", erro.message);
    }
    else {
        console.log("Conexão com banco de dados encerrada.");
    }
});
