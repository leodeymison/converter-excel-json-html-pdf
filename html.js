var ejs = require('ejs')

class HTML{
    static async Parser(table){
        return await ejs.renderFile("./table.ejs", {header: table.header, rows: table.rows})
    }
}


module.exports = HTML