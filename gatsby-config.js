const {resolve} = require("path")
module.exports = {
    plugins : [
        "gatsby-transformer-remark",
        {
            resolve : "gatsby-source-filesystem",
            options : {
                path : resolve("contents")
            }
        }
    ]
}