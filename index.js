// dependencies
const http = require('http');

// app object - module scaffolding.
const app = {};
const {handleReqRes} = require('./helpers/handleReqRes')


// configuration
app.config = {
    port: 3000
};

//create server.
app.createServer = () =>{
    const server = http.createServer(app.handleReq);
    server.listen(app.config.port, ()=> {
      console.log(`Server is running on ${app.config.port}`)
    })
}

// handle request response.
app.handleReq = handleReqRes;

// server start.
app.createServer();

