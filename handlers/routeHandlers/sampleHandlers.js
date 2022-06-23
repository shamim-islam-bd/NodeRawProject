
// module saffolding

const handler = require("../../helpers/handleReqRes");

const hander = {

};

handler.sampleHandler = (reqProperties, callback) => {
    console.log(reqProperties);
    callback(200, {
       message: "this is sample url"
    });
//    console.log("sample")
}

module.exports = hander;