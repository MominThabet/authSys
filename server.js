const http = require('http');
require('dotenv').config();

const { mongoConnect } = require('./services/mongo');

const app = require('./app');

const server = http.createServer(app);
const PORT = process.env.PORT || 3000;

function startServer() {
    mongoConnect();
    server.listen(PORT, () => {
        console.log('listening on port', PORT);
    });
}
startServer();
