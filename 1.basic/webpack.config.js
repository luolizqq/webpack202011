var {resolve} = require("path");
exports.default={
    entry:"./src/index.js",
    output:{
        path:resolve(__dirname,"dist"),
        filename:"main.js"
    },
    loaders:{
        
    }
}