// Roda o node assim: node agenda/programa
//console.log("Hello World, meu primeiro programa node.js")

/*
const http = require("http");

const server = http.createServer(function (req, res) {
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    if (req.url === "/") {
        res.statusCode = 200;
        res.end("<h1>Bem-vindo à minha página inicial</h1>");
    } 
    else if (req.url === "/sobre") {
        res.statusCode = 200;
        res.end("<h1>Sobre Nós</h1><p>Esta é a página sobre nós.</p>");
    } else {
        res.statusCode = 404;
        res.end("<h1>404 Página Não Encontrada</h1>");
    }
});

const PORT = 3000;

server.listen(PORT, function () {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
*/

// API
const http = require('http');

const server = http.createServer(function(req, res){
    res.setHeader('Content-Type', 'application/json');
    if (req.url === '/') {
        res.statusCode = 200;
        res.end(JSON.stringify({ message: 'Bem-vindo à API!' }));
    }
    else if (req.url === '/api') {
        res.statusCode = 200;
        res.end(JSON.stringify({ data: 'Aqui estão seus dados da API!' }));
    }
    else {
        res.statusCode = 404;
        res.end(JSON.stringify({ error: 'Rota não encontrada' }));
    }
});

const PORT = 5000;

server.listen(PORT, function(){
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
