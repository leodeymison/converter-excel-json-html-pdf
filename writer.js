const fs = require('fs');
const util = require('util')

class whiter {
    constructor(){
        this.writer = util.promisify(fs.writeFile);
    }

    async Red(filename, data){
        try{
            await this.writer(filename, data)
            return true
        }
        catch(error){
            return false
        }
        
    }
}

module.exports = whiter