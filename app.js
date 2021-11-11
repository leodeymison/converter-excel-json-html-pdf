var Reader = require('./index');
const Writer = require('./writer');
const Processor = require('./processor');
const Table = require('./Table');
const HTML = require('./html');
const PDFWriter = require('./PDFWhiter')

var leitor = new Reader()
var escritor = new Writer();

async function main(){
    var dados = await leitor.Read('./users.csv')
    var processed = Processor.Process(dados)
    var user = new Table(processed)

    var filehtml = await HTML.Parser(user)
    
    escritor.Red(Date.now()+'.html',filehtml)
    PDFWriter.writePDF(Date.now()+'.pdf',filehtml)
}

main()