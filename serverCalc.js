const http = require('node:http');

const server = http.createServer((req, res) => {
    const url = new URL(req.url, 'http://localhost:3000');

    const num1 = Number(url.searchParams.get('a'));
    const num2 = Number(url.searchParams.get('b'));

    res.setHeader('Content-Type', 'application/json');

    if (url.pathname === '/add') {
        res.end(JSON.stringify({ result: num1 + num2 }));
    } else if (url.pathname === '/subtract') {
        res.end(JSON.stringify({ result: num1 - num2 }));
    } else if (url.pathname === '/multiply') {
        res.end(JSON.stringify({ result: num1 * num2 }));
    } else if (url.pathname === '/divide') {
        res.end(JSON.stringify({ result: num1 / num2 }));
    } else {
        res.statusCode = 404;
        res.end(JSON.stringify({ message: 'Not Found' }));
    }
});

server.listen(3000, () => {
    console.log('Server running at port 3000');
});