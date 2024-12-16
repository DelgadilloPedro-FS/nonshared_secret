require('dotenv').config();

const http = require('http');
const hostname = process.env.HOSTNAME;
const port = process.env.PORT;

const secretKey = process.env.SECRET_KEY;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end(`Your secret key is: ${secretKey}`);
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://<span class="math-inline">\{hostname\}\:</span>{port}/`);
});