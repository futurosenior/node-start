import http from 'node:http';

const users = [];

const server = http.createServer((req, res) => {
  const { method, url } = req;
  if (method === 'GET') {
    return res.end('Listagem de usuário')
  }

  if (method === 'POST' && url === '/users') {
    return res.end('Criação de usuário')
  }

  return res.end("Hello World!");
})

server.listen(3333);