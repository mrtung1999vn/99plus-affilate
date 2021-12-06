const express = require('express');
const https = require('https');
const http = require('http');
const fs = require("fs")
const cors = require('cors');
var bodyParser = require('body-parser')
const port = process.env.PORT || 3004;

// Create app
const app = express();
app.use(bodyParser.urlencoded({ extended: false }))
    // Create Doc-API
var swaggerJsdoc = require("swagger-jsdoc")
var swaggerUi = require("swagger-ui-express")

app.use(cors());
app.use(express.json());


const document = require('./document');
const controller = require('./controller')

//#region OPTIONS
const options = {
    definition: document,
    apis: ["./routes/books.js"],
};

const optionsHTTPS = {
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync('cert.pem')
};
//#endregion


//#region DOC-API
const specs = swaggerJsdoc(options);
app.use(
    "/doc-api",
    swaggerUi.serve,
    swaggerUi.setup(specs)
);
//#endregion

//#region CREATE_SERVER
// const server =  https.createServer(optionsHTTPS,app)
const server = http.createServer(app)
    //#endregion

//#region SOCKET IO
const io = require("socket.io")(server, {
    cors: {
        origin: "*",
    }
});


//#region API & SOCKET-IO SERVER 
controller.Controller(app, io)
    //#endregion API SERVER


server.listen(port, () => console.log(`Listening on port ${port}`));