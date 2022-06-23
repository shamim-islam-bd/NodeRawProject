
// module saffolding / notFount handeler
const handler = require("../../helpers/handleReqRes");

const hander = {};

handler.notFoundHandler = (reqProperties, callback) => {
   console.log("Not Found")
   callback(404, {
      message: "your page not found!"
   })
}

module.exports = hander;