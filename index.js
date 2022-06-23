// dependencies
const http = require('http');
const {handleReqRes} = require('./helpers/handleReqRes')
const enviroment = require('./helpers/enviroment');

// app object - module scaffolding.
const app = {};


// configuration
// app.config = {
//     port: 3000
// };

//create server.
app.createServer = () =>{
    const server = http.createServer(app.handleReq);
    server.listen(enviroment.port, ()=> {
      console.log(`Server is running on ${enviroment.port}`)
    })
}

// handle request response.
app.handleReq = handleReqRes;

// server start.
app.createServer();

