const http = require("http");

const port = 8080

const server = http.createServer((req, res) => {
    if (req.url === '/home') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end('<h1>Hello World!</h1>');
    }

    if (req.url === '/persons') {
        const persons = [
            {
                name : "Alice",
                email: "alice@gmail.com"
            },
            {
                name : "Roberto",
                email: "robe@gmail.com"
            }
        ]
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(persons));
    }
})

server.listen(port, () => console.log(`Listen to http://localhost:${port}`));

