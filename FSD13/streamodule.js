const fs = require('fs')

const readableStream = fs.createReadStream('rohan.txt','utf-8')
const writableStream = fs.createWriteStream('tarun.txt')

readableStream.pipe(writableStream)

writableStream.on('finish', () => {
  console.log('File copy completed!');
});

let x = fs.createReadStream('rohan.txt','utf-8');
x.on('data',(chunk)=>{
    console.log(chunk)
})

